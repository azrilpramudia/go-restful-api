package main

import (
	"github.com/azrilpramudia/go-restful-api/config"
	"github.com/azrilpramudia/go-restful-api/database"
	"github.com/azrilpramudia/go-restful-api/routes"
)

func main() {
	config.LoadEnv() // load config .env
	
	database.InitDB() // Inisialisasi Database

	r := routes.SetupRouter() // setup router

	// running server
	r.Run(":" + config.GetEnv("APP_PORT", "3000"))
}
