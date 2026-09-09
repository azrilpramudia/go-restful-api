package routes

import (
	"github.com/azrilpramudia/go-restful-api/controllers"
	"github.com/azrilpramudia/go-restful-api/middleware"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders: []string{"Content-Length"},
	}))

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello World!",
		})
	})

	router.POST("/api/register", controllers.Register)
	router.POST("/api/login", controllers.Login)
	router.GET("/api/users", middleware.AuthMiddleware(), controllers.FindUsers)
	router.POST("/api/users", middleware.AuthMiddleware(), controllers.CreateUser)
	router.GET("/api/users/:id", middleware.AuthMiddleware(), controllers.FindUsersById)
	router.PUT("/api/users/:id", middleware.AuthMiddleware(), controllers.UpdateUser)
	router.DELETE("/api/users/:id", middleware.AuthMiddleware(), controllers.DeleteUser)

	return router
}