import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function CheckoutModal({ close }) {
    const { clearCart, toggleCart } = useCart()
    const [form, setForm] = useState({ name: '', email: '', address: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        clearCart()
        toggleCart()
        close()
        alert('Your Order placed successfully!')
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-xl w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Checkout</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 border rounded" />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded" />
                    <textarea name="address" placeholder="Address" onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={close} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}