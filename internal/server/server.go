package server

import (
	"embed"
	"net/http"
)

type Server struct {
	addr    string
	mux     *http.ServeMux
	content embed.FS
}

func New(addr string, content embed.FS) *Server {
	s := &Server{
		addr:    addr,
		mux:     http.NewServeMux(),
		content: content,
	}
	s.registerRoutes()
	return s
}

func (s *Server) registerRoutes() {
	registerAPIRoutes(s.mux)

	registerStaticRoutes(s.mux, s.content)
}

func (s *Server) Run() error {
	handler := GzipMiddleware(s.mux)
	return http.ListenAndServe(s.addr, handler)
}
