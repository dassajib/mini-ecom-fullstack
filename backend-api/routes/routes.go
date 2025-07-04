package routes

import (
	"github.com/dassajib/mini-ecom-fullstack/backend-api/controllers"
	"github.com/dassajib/mini-ecom-fullstack/backend-api/repositories"
	"github.com/dassajib/mini-ecom-fullstack/backend-api/services"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine) {
	productRepo := repositories.NewProductRepository()
	productService := services.NewProductService(productRepo)
	productController := controllers.NewProductController(productService)

	r.GET("products", productController.GetProducts)
	r.GET("products/:id", productController.GetProductByID)
}
