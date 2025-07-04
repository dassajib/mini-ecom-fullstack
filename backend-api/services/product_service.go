package services

import (
	"github.com/dassajib/mini-ecom-fullstack/backend-api/models"
	"github.com/dassajib/mini-ecom-fullstack/backend-api/repositories"
)

type ProductService interface {
	GetAllProducts() ([]models.Product, error)
	GetProductByID(id uint) (*models.Product, error)
}

type productService struct {
	repo repositories.ProductRepository
}

func NewProductService(r repositories.ProductRepository) ProductService {
	return &productService{repo: r}
}

func (s *productService) GetAllProducts() ([]models.Product, error) {
	return s.repo.GetAll()
}

func (s *productService) GetProductByID(id uint) (*models.Product, error) {
	return s.repo.GetById(id)
}
