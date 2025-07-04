import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
    const { cartItems, toggleCart } = useCart()
    const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-wide hover:opacity-90 transition">
                    🛒 MiniShop
                </Link>

                <button
                    onClick={toggleCart}
                    className="relative flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800 transition"
                >
                    <span className="text-base">Cart</span>

                    {totalQty > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow">
                            {totalQty}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    )
}
