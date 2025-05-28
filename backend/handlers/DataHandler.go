package handlers

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	_ "modernc.org/sqlite"
)

type pokemonData struct {
	Id             int    `json:"id"`
	Gen            string `json:"gen"`
	Name           string `json:"name"`
	Primary_type   string `json:"primary_type"`
	Secondary_type string `json:"secondary_type"`
	Description    string `json:"description"`
}

func DataHandler(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		var p pokemonData
		id := r.PathValue("id")
		intId, _ := strconv.Atoi(id)
		err := db.QueryRow("SELECT id, gen, name, primary_type, secondary_type, description FROM pokemon WHERE id = ?", intId).
			Scan(&p.Id, &p.Gen, &p.Name, &p.Primary_type, &p.Secondary_type, &p.Description)
		if err != nil {
			fmt.Print(err)
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(p)
	}
}
