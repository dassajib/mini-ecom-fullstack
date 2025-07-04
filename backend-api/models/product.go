package models

type Product struct {
	ID          uint    `json:"Id" gorm:"PrimaryKey"`
	Title       string  `json:"Title"`
	Description string  `json:"Description"`
	Price       float64 `json:"Price"`
	Image       string  `json:"Image"`
}
