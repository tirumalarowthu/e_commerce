
// import { createSlice } from "@reduxjs/toolkit"
// const products = useSelector(state => state.productList.products)
// const searchSlice =createSlice({
//     name:"searchSlice",
//     initialState:{
//         searchProducts:[]
//     },
//     reducers:{
//         searchProducts:(state,action)=>{
//             try {
//                 if (!action.payload) {
//                   state.searchProducts=products
                  
//                 } else {
//                     const searchResults = products.filter((item) => {
//                         return item.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
//                     })
//                     state.products=searchResults 
//                 }

//             }
//             catch (err) {
//                 console.log(err.message)
//             }
//         }
//     }
// })
// export default searchSlice.reducers
// export const {searchProducts}=searchSlice.action
