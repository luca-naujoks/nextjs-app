package server

import (
	"embed"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path"
	"personal-app/internal/github"
	"strings"
)

func registerAPIRoutes(mux *http.ServeMux) {
	mux.HandleFunc("GET /api/projects", handleRepoRequest)
}

func registerStaticRoutes(mux *http.ServeMux, content embed.FS) {
	if _, err := os.Stat("web-app/dist"); err == nil {
		fmt.Println("Serving frontend files from local source")
		registerLocalStaticRoutes(mux)
	} else {
		fmt.Println("Serving frontend files from embedded source")
		registerEmbeddedStaticRoutes(mux, content)
	}
}

func registerLocalStaticRoutes(mux *http.ServeMux) {
	mux.Handle("GET /assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("web-app/dist/assets"))))
	mux.HandleFunc("GET /favicon.svg", serveLocalFile("web-app/dist/favicon.svg"))
	mux.HandleFunc("GET /apple-touch-icon.png", serveLocalFile("web-app/dist/apple-touch-icon.png"))
	mux.HandleFunc("GET /robots.txt", serveLocalFile("web-app/dist/assets/robots.txt"))
	mux.HandleFunc("GET /", serveLocalFile("web-app/dist/index.html"))
}

func registerEmbeddedStaticRoutes(mux *http.ServeMux, content embed.FS) {
	mux.HandleFunc("GET /assets/{filepath}", func(w http.ResponseWriter, r *http.Request) {
		serveEmbeddedFile(w, r, content, "assets", r.PathValue("filepath"))
	})
	mux.HandleFunc("GET /favicon.svg", func(w http.ResponseWriter, r *http.Request) {
		serveEmbeddedFile(w, r, content, "", "favicon.svg")
	})
	mux.HandleFunc("GET /apple-touch-icon.png", func(w http.ResponseWriter, r *http.Request) {
		serveEmbeddedFile(w, r, content, "", "apple-touch-icon.png")
	})
	mux.HandleFunc("GET /robots.txt", func(w http.ResponseWriter, r *http.Request) {
		serveEmbeddedFile(w, r, content, "", "assets/robots.txt")
	})
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/assets/") {
			http.NotFound(w, r)
			return
		}
		serveEmbeddedFile(w, r, content, "", "index.html")
	})
}

func serveLocalFile(filePath string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filePath)
	}
}

func serveEmbeddedFile(w http.ResponseWriter, r *http.Request, content embed.FS, prefix string, filepath string) {
	// If the path is empty or ends with "/", serve index.html
	if filepath == "" || strings.HasSuffix(filepath, "/") {
		filepath = path.Join(filepath, "index.html")
	}

	fullPath := path.Join("web-app/dist", prefix, filepath)
	f, err := content.Open(fullPath)
	if err != nil {
		// If file not found, serve 404
		fmt.Printf("File not found: %s\n", fullPath)
		http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		return
	}
	defer f.Close()

	stat, err := f.Stat()
	if err != nil {
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}

	http.ServeContent(w, r, stat.Name(), stat.ModTime(), f.(io.ReadSeeker))
}

func handleRepoRequest(w http.ResponseWriter, r *http.Request) {
	projects, err := github.GetProjects()
	if err != nil {
		fmt.Printf("Error handling Repo Request Err:%s\n", err.Error())
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	err = json.NewEncoder(w).Encode(projects)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
