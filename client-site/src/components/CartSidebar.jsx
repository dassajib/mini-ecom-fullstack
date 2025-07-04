import { useCart } from '../context/CartContext'
import { useModal } from '../context/ModalContext'

export default function CartSidebar() {
    const { cartItems, updateQuantity, removeFromCart, isCartOpen, toggleCart } = useCart()
    const { openCheckout } = useModal()

    const total = cartItems.reduce((acc, item) => acc + item.Price * item.quantity, 0)

    return (
        <div
            className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 w-80 z-50 p-5 border-l border-gray-200 flex flex-col ${
                isCartOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Your Cart</h2>
                <button onClick={toggleCart} className="text-lg text-red-500">
                    X
                </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center">Cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.Id} className="border border-gray-200 rounded-lg p-3 shadow-sm">
                            <div className="font-medium text-base">{item.Title}</div>
                            <div className="text-sm text-gray-600 mt-1">${item.Price.toFixed(2)}</div>

                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center border rounded px-2 py-1 space-x-2">
                                    <button
                                        onClick={() => updateQuantity(item.Id, -1)}
                                        className="text-lg font-bold px-2 hover:text-red-500"
                                    >
                                        −
                                    </button>
                                    <span className="text-sm font-semibold">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.Id, 1)}
                                        className="text-lg font-bold px-2 hover:text-green-600"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.Id)}
                                    className="text-sm text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="pt-4 mt-auto border-t border-gray-200">
                <div className="flex justify-between text-lg font-semibold mb-4">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>

                <button
                    onClick={openCheckout}
                    disabled={cartItems.length === 0}
                    className={`w-full py-3 rounded-xl font-medium transition ${
                        cartItems.length === 0
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                >
                    Checkout
                </button>
            </div>
        </div>
    )
}
