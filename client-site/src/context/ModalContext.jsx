import { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export function ModalProvider({ children }) {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

    const openCheckout = () => setIsCheckoutOpen(true)
    const closeCheckout = () => setIsCheckoutOpen(false)

    return (
        <ModalContext.Provider value={{ isCheckoutOpen, openCheckout, closeCheckout }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)
