package handlers

import (
	"fmt"
	"net/http"
	"path/filepath"
	"strconv"
)

func SpriteHandler(cwd string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		intId, _ := strconv.Atoi(id)
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "image/webp")
		spritePath := filepath.Join(cwd, fmt.Sprintf("assets/sprites/%04d.webp", intId))
		http.ServeFile(w, r, spritePath)
	}
}
