package server

import (
	"embed"
	"fmt"
	"net/http"
)

type Server struct {
	addr    int
	mux     *http.ServeMux
	content embed.FS
}

func New(addr int, content embed.FS) *Server {
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
	return http.ListenAndServe(fmt.Sprintf(":%v", s.addr), handler)
}
