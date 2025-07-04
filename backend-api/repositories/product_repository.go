package repositories

import (
	"github.com/dassajib/mini-ecom-fullstack/backend-api/config"
	"github.com/dassajib/mini-ecom-fullstack/backend-api/models"
)

type ProductRepository interface {
	GetAll() ([]models.Product, error)
	GetById(id uint) (*models.Product, error)
}

type productRepository struct{}

func NewProductRepository() ProductRepository {
	return &productRepository{}
}

func (r *productRepository) GetAll() ([]models.Product, error) {
	var products []models.Product
	err := config.DB.Find(&products).Error
	return products, err
}

func (r *productRepository) GetById(id uint) (*models.Product, error) {
	var product models.Product
	err := config.DB.First(&product, id).Error
	return &product, err
}
