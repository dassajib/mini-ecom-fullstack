import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
    const { addToCart } = useCart()

    return (
        <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col w-full max-w-[200px] mx-auto">
            <Link to={`/product/${product.Id}`}>
                <img
                    src={product.Image}
                    alt={product.Title}
                    className="w-full h-40 object-cover rounded-t-2xl"
                />
            </Link>

            <div className="p-3 flex flex-col flex-grow">
                <Link to={`/product/${product.Id}`}>
                    <h2 className="text-base font-semibold text-gray-800 hover:underline line-clamp-1">{product.Title}</h2>
                    <p className="text-sm text-gray-500 mt-1">${product.Price.toFixed(2)}</p>
                </Link>

                <button
                    onClick={() => addToCart(product)}
                    className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
