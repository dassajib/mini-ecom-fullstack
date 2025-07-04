package config

import (
	"fmt"

	"github.com/dassajib/mini-ecom-fullstack/backend-api/models"
)

func SeedProducts() {
	if err := DB.Exec("DELETE FROM products").Error; err != nil {
		fmt.Println("Failed to clear existing products:", err)
		return
	}
	fmt.Println("Deleted all previous products")

	products := []models.Product{
		{
			Title:       "T-Shirt",
			Description: "Soft cotton T-shirt for daily wear.",
			Price:       10.00,
			Image:       "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80",
		},
		{
			Title:       "Laptop",
			Description: "14-inch high performance laptop for work and gaming.",
			Price:       800.00,
			Image:       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80",
		},
		{
			Title:       "Sneakers",
			Description: "Comfortable sneakers for everyday walking and running.",
			Price:       60.05,
			Image:       "https://images.unsplash.com/photo-1528701800489-4767e5a1be58?auto=format&fit=crop&w=200&q=80",
		},
		{
			Title:       "Headphones",
			Description: "Wireless noise-cancelling headphones with 30-hour battery.",
			Price:       130.07,
			Image:       "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80",
		},
		{
			Title:       "Smart Watch",
			Description: "Track your fitness and stay connected on the go.",
			Price:       150.04,
			Image:       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80",
		},
		{
			Title:       "Backpack",
			Description: "Durable backpack with laptop compartment and USB charger port.",
			Price:       40.00,
			Image:       "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=200&q=80",
		},
	}

	for _, product := range products {
		if err := DB.Create(&product).Error; err != nil {
			fmt.Println("Failed to insert:", product.Title, err)
		} else {
			fmt.Println("Inserted:", product.Title)
		}
	}
}
