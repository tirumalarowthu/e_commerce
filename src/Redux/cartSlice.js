import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems: [],
    totalCartQuantity: 0,
    totalCartPrice: 0
}
const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExits = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemExits >= 0) {
                state.cartItems[itemExits].quantity++
                toast.info("Quantity increased successfully")
            }
            else {
                const newItem = { ...action.payload, quantity: 1 }
                state.cartItems.push(newItem)
                toast.success("Product added to the cart")
            }
        },
        deleteFromCart: (state, action) => {
            const itemExits = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (state.cartItems[itemExits].quantity > 1) {
                state.cartItems[itemExits].quantity--
                toast.warning("Quantity decreased successfully")
            }
            else if (state.cartItems[itemExits].quantity === 1) {
                const remainingItems = state.cartItems.filter((item) => item.id !== action.payload.id)
                state.cartItems = remainingItems
                toast.warning("Product removed from cart")
            }
        },
        getTotal: (state, action) => {
            const { totalPrice, totalQuantity } = state.cartItems.reduce((cartInfo, item) => {
                const total = item.price * item.quantity
                cartInfo.totalPrice += total
                cartInfo.totalQuantity += item.quantity
                return cartInfo
            }, { totalPrice: 0, totalQuantity: 0 })
            state.totalCartPrice = totalPrice
            state.totalCartQuantity = totalQuantity
        }
    }
})
export default cartSlice.reducer
export const { addToCart, deleteFromCart, getTotal } = cartSlice.actions



// const removedItem=state.cartItems.findIndex((item)=>item.id===action.payload.id)
// if(removedItem>=0){
//  state.cartItems[removedItem].quantity--
//  toast.info("Item removed from Cart")
// }
// else{
//  state.cartItems.splice(removedItem,1)
// }