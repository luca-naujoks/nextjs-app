package main

import (
	"embed"
	"fmt"
	"personal-app/internal/server"
)

//go:embed web-app/dist
var embeddedContent embed.FS

func main() {
	router := server.New(80, embeddedContent)
	err := router.Run()
	if err != nil {
		fmt.Printf("Router Crashed with error: %s", err.Error())
		return
	}
}
