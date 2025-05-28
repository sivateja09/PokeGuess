package main

import (
	"backend/routes"
	"database/sql"
	"fmt"
	"net/http"
	"os"

	_ "modernc.org/sqlite"
)

func main() {
	db, _ := sql.Open("sqlite", "db/pokemon.db")
	cwd, _ := os.Getwd()
	r := http.NewServeMux()
	routes.RegisterRoutes(r, db, cwd)
	s := http.Server{
		Addr:    ":1412",
		Handler: r,
	}
	err := s.ListenAndServe()

	if err != nil {
		fmt.Print(err)
	}

	fmt.Print("Server Listening at port 1412")
}
