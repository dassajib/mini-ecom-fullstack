import { useEffect, useState } from 'react'
import { api } from '../services/api'
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'

export default function HomePage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get('/products')
                setProducts(res.data)
            } catch (err) {
                console.error(err)
                setError('Failed to load products.')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className="px-4 md:px-10 py-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">All Products</h1>

            {error && (
                <p className="text-red-600 bg-red-100 p-4 rounded-md mb-6">
                    {error}
                </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {loading
                    ? Array.from({ length: 10 }).map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))
                    : products.map((product) => (
                        <ProductCard key={product.Id} product={product} />
                    ))}
            </div>
        </div>
    )
}
