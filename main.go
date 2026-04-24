package main

import (
	"embed"
	"fmt"
	"io"
	"net/http"
	"os"
	"path"
	"personal-app/internal/github"
	"strings"

	"github.com/gin-gonic/gin"
)

//go:embed web-app/dist
var embeddedContent embed.FS

func main() {
	router := gin.Default()

	api := router.Group("/api")
	{
		api.GET("/projects", func(context *gin.Context) {
			projects, err := github.GetProjects()
			if err != nil {
				context.IndentedJSON(500, err)
				return
			}
			context.IndentedJSON(200, projects)
			return
		})
	}

	_, err := os.Stat("web-app/dist")
	if err == nil {
		fmt.Println("Serving frontend files from local source")
		router.Static("/assets", "web-app/dist/assets")
		router.GET("/", func(c *gin.Context) {
			c.File("web-app/dist/index.html")
		})
		router.GET("/projects", func(c *gin.Context) {
			c.File("web-app/dist/index.html")
		})
		router.GET("/competencies", func(c *gin.Context) {
			c.File("web-app/dist/index.html")
		})
		router.GET("/favicon.ico", func(c *gin.Context) {
			c.File("web-app/dist/favicon.ico")
		})
	} else {
		fmt.Println("Serving frontend files from embedded source")
		router.GET("/favicon.ico", func(c *gin.Context) {
			ServeEmbeddedFile(c, "", "favicon.ico")
		})
		router.GET("/assets/*filepath", func(c *gin.Context) {
			assetPath := c.Param("filepath")
			fmt.Printf("Serving asset: %s\n", assetPath)
			ServeEmbeddedFile(c, "assets", assetPath)
		})
		router.GET("/", func(c *gin.Context) {
			ServeEmbeddedFile(c, "", "index.html")
		})
		router.GET("/projects", func(c *gin.Context) {
			ServeEmbeddedFile(c, "", "index.html")
		})
		router.GET("/competencies", func(c *gin.Context) {
			ServeEmbeddedFile(c, "", "index.html")
		})
	}

	fmt.Println("Server started on Interface :6060")
	err = router.Run(":6060")
	if err != nil {
		errMessage := fmt.Errorf("failed to run server: %v", err)
		fmt.Println(errMessage)
	}
}

func ServeEmbeddedFile(c *gin.Context, prefix string, filepath string) {
	// If the path is empty or ends with "/", serve index.html
	if filepath == "" || strings.HasSuffix(filepath, "/") {
		filepath = path.Join(filepath, "index.html")
	}

	// Try to open the file from our embedded filesystem
	fullPath := path.Join("web-app/dist", prefix, filepath)
	f, err := embeddedContent.Open(fullPath)
	if err != nil {
		// If file not found, serve 404
		fmt.Printf("File not found: %s\n", fullPath)
		http.Error(c.Writer, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		c.Status(http.StatusNotFound)
		return
	}
	defer f.Close()

	stat, err := f.Stat()
	if err != nil {
		c.Status(http.StatusInternalServerError)
		return
	}

	// Serve the file
	http.ServeContent(c.Writer, c.Request, stat.Name(), stat.ModTime(), f.(io.ReadSeeker))
}
