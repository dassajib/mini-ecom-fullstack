package main

import (
	"log"
	"os"

	"github.com/dassajib/mini-ecom-fullstack/backend-api/config"
	"github.com/dassajib/mini-ecom-fullstack/backend-api/models"
	"github.com/dassajib/mini-ecom-fullstack/backend-api/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using environment variables")
	}

	config.InitDB()

	config.DB.AutoMigrate(&models.Product{})

	if os.Getenv("SEED") == "true" {
		config.SeedProducts()
	}

	r := gin.Default()
	r.Use(cors.Default())

	routes.RegisterRoutes(r)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("🚀 Server is running at http://localhost:%s", port)
	r.Run(":" + port)
}
