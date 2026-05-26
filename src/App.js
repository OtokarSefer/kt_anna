import Meals from "./components/Meals.js";
import Header from "./components/Header";
import CartProvider from "./store/CartContext.js";
import Modal from "./components/UI/Modal.js"
import { useState } from "react"

const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const openCart = () => {
    setCartOpen(true)
  }
  const closeCart = () => {
    setCartOpen(false)
  }
 return (
    <CartProvider >
      <Header onOpenCart={openCart}/>
      <Meals />
      <Modal className="cart" open={cartOpen} onClose={closeCart}>
        <h2>Cart</h2>
        <button onClick={closeCart}>
          Close
        </button>
      </Modal>
    </CartProvider >
  )
}

export default App;
