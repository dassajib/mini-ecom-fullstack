# 🛍️ Mini E-Commerce Fullstack App

A minimal full-stack e-commerce web application built with:

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Go (Golang) + Gin + PostgreSQL

---

## ⚙️ Prerequisites

- Node.js ≥ 18.x
- Go ≥ 1.20
- PostgreSQL (running locally)
- Git

---

## 📦 Project Structure

mini-ecom-fullstack/
├── backend/ # Golang Gin API
├── frontend/ # React + Vite UI

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/dassajib/mini-ecom-fullstack.git
cd mini-ecom-fullstack

## Backend Setup
cd backend
cp .env

Edit .env to match your local PostgreSQL configuration:
DB_URL=host=localhost user=sajib password=password dbname=ecom port=5432 sslmode=disable
SEED=true

Install Go dependencies and run the backend server:
go mod tidy
go run cmd/main.go
backend will run at: http://localhost:8080"

##Frontend Setup
cd client-site
cp .env.example .env
Update .env:
VITE_API_BASE_URL="http://localhost:8080"  

Install dependencies and start the dev server:
npm install
npm run dev
The frontend will run at: http://localhost:5173

##Test the App
Visit http://localhost:5173
Browse the products
Add to cart and checkout
