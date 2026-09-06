package main

import (
	"github.com/azrilpramudia/go-restful-api/config"
	"github.com/azrilpramudia/go-restful-api/database"
	"github.com/gin-gonic/gin"
)

func main() {
	config.LoadEnv() // load config .env
	database.InitDB() // Inisialisasi Database

	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello World!",
		})
	})

	// running server
	router.Run(":" + config.GetEnv("APP_PORT", "3000"))
}
