import { useEffect } from "react"
import { useModal } from "./context/ModalContext"
import CartSidebar from "./components/CartSidebar"
import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"
import CheckoutModal from "./components/CheckoutModal"

export default function App() {
  const { isCheckoutOpen, closeCheckout } = useModal()

  useEffect(() => {
    document.body.style.overflow = isCheckoutOpen ? 'hidden' : 'auto'
  }, [isCheckoutOpen])

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <AppRoutes />
      <CartSidebar />

      {isCheckoutOpen && <CheckoutModal close={closeCheckout} />}
    </div>
  )
}