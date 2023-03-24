import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        productList: productSlice,
        cart: cartSlice
    }
})

export default store
