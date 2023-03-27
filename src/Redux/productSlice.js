import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    products:[],
    error:"",
    status:"idle"
}
export const fetchProducts=createAsyncThunk("productSlice",async()=>{
    try{
        const { data } = await axios.get("https://productapi-xi.vercel.app/")
        return data
        
    }
    catch(err){
        console.log(err.message)
    }
})
const productSlice=createSlice({
    name:'productSlice',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status="loading"
        }).addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status="success"
            state.products=action.payload
        }).addCase(fetchProducts.rejected,(state,action)=>{
            state.status="failed"
        })
    }
})
export default productSlice.reducer


