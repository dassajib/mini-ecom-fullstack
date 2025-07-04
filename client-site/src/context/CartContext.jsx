import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = () => setIsCartOpen(!isCartOpen)

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.Id === product.Id)
            if (existing) {
                return prev.map((item) =>
                    item.Id === product.Id ? { ...item, quantity: item.quantity + 1 } : item
                )
            } else {
                return [...prev, { ...product, quantity: 1 }]
            }
        })
    }

    const updateQuantity = (productId, delta) => {
        setCartItems((prev) => {
            return prev
                .map((item) =>
                    item.Id === productId
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter((item) => item.quantity > 0)
        })
    }

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.Id !== productId))
    }

    const clearCart = () => setCartItems([])

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart, isCartOpen, toggleCart }}
        >
            {children}
        </CartContext.Provider>
    )
}