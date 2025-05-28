package routes

import (
	"backend/handlers"
	"database/sql"
	"net/http"

	_ "modernc.org/sqlite"
)

func RegisterRoutes(r *http.ServeMux, db *sql.DB, cwd string) {
	r.HandleFunc("GET /pokemon/{id}", handlers.SpriteHandler(cwd))
	r.HandleFunc("GET /pokemonData/{id}", handlers.DataHandler(db))
}
