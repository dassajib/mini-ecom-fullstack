import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { api } from '../services/api'

export default function ProductDetailPage() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const { addToCart } = useCart()

    useEffect(() => {
        api.get(`/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err))
    }, [id])

    if (!product) return <div className="p-6">Loading...</div>

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <img src={product.Image} alt={product.Title} className="w-full h-64 object-cover rounded" />
            <h1 className="text-3xl font-bold mt-4">{product.Title}</h1>
            <p className="text-gray-600 mt-2">{product.Description}</p>
            <p className="text-xl font-semibold mt-2">${product.Price}</p>
            <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add to Cart
            </button>
        </div>
    )
}
