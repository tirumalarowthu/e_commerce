import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'
import { fetchProducts } from '../Redux/productSlice'
import "./ProductStyles.css" 
const Products = () => {
    const status = useSelector(state => state.productList.status)
    const products = useSelector(state => state.productList.products)
    // const cartItems = useSelector(state => state.cart.cartItems)
    // console.log(cartItems)
    // console.log(SearchProducts)
    // console.log(products)
    const dispatch = useDispatch()
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts())
        }
    }, [dispatch, status])
    var content;
    if (status === "loading") {
        content = "Products are loading Please Wait....."
    } else if (status === "success") {

        content = <div style={{ display: 'flex', flexWrap: "wrap",marginTop:"70px" }}>
            {
                products.map((item, index) => {
                    return <div id={item.id} className='p-1 col-lg-3 col-md-4 col-sm-2 col-xs-1  text-center' key={index}>
                        <div style={{ height: "60vh" }} className='border p-4 rounded '>
                            <div style={{ height: "50%" }}> <img alt="item" width="80%" height="100%" src={item.image} /></div>
                            <h5 style={{ height: "20%", overflow: "hidden" }}>{item.title.substr(0, 45)}</h5>
                            <h5 style={{ height: "10%", color: "yellowgreen" }}>Special Price:${item.price}</h5>
                            <div className='text-center cartitems'>
                                <button onClick={() => dispatch(addToCart(item))} className='btn btn-primary m-1'>Add to Cart</button>
                                {/* <button  onClick={()=>dispatch(deleteFromCart(item))} className='btn btn-warning m-1' >Remove from Cart</button> */}
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    }
    else if (status === "failed") {
        content = "Errror While loading "
    }


    return (
        <>
            {
                content
            }
        </>
    )
}

export default Products