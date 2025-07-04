import { useEffect, useState } from 'react'
import { api } from '../services/api'
import ProductCard from '../components/ProductCard'

export default function HomePage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className="px-4 md:px-10 py-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.Id} product={product} />
                ))}
            </div>
        </div>
    )
}
