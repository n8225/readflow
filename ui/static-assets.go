package ui

import (
	"embed"
	"io/fs"
	"net/http"
	"os"
	"path"
)

//go:embed build/*
var staticFs embed.FS

type fsFunc func(name string) (fs.File, error)

func (f fsFunc) Open(name string) (fs.File, error) {
	return f(name)
}

//StaticHandler serves static assets or index.html if file doesn't exist or a path is requested
func StaticHandler() http.Handler {
	handler := fsFunc(func(name string) (fs.File, error) {
		assetPath := path.Join("build/", name)
		f, err := staticFs.Open(assetPath)
		if !os.IsNotExist(err) || path.Ext(assetPath) != "" {
			return f, err
		}
		return staticFs.Open("build/index.html")
	})
	return http.FileServer(http.FS(handler))
}
