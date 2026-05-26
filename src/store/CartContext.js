import { createContext, useReducer } from "react"

export const CartContext = createContext()

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const existingCartItemIndex = state.findIndex(
            (item) => item.id === action.item.id
        )
        const updatedCart = [...state];
        if (existingCartItemIndex !== -1) {
            const existingItem = updatedCart[existingCartItemIndex]
            updatedCart[existingCartItemIndex] = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            }
        } else {
            updatedCart.push({
                ...action.item,
                quantity: 1,
            })
        } return updatedCart
    } return state
}
const CartProvider = ({ children }) => {
    const [cart, dispatchCartAction] = useReducer(cartReducer, [])

    const addItem = (item) => {
        dispatchCartAction({
            type: "ADD_ITEM",
            item: item,
        })
        console.log(cart)
    } 
    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider