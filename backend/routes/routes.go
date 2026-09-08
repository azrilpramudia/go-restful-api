package routes

import (
	"github.com/azrilpramudia/go-restful-api/controllers"
	"github.com/azrilpramudia/go-restful-api/middleware"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello World!",
		})
	})

	router.POST("/api/register", controllers.Register)
	router.POST("/api/login", controllers.Login)
	router.GET("/api/users", middleware.AuthMiddleware(), controllers.FindUsers)
	router.POST("/api/users", middleware.AuthMiddleware(), controllers.CreateUser)

	return router
}