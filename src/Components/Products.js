import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'
import { fetchProducts } from '../Redux/productSlice'
import "./ProductStyles.css"

const Products = () => {
    const status = useSelector(state => state.productList.status)
    const products = useSelector(state => state.productList.products)
    ///
    const [page, setPage] = useState(1)
    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= products.length / 96 && selectedPage !== page) {
            setPage(selectedPage)
        }
    }
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
        content = <div style={{ height: "100%" }}>
            <img style={{ width: "100%", height: "100%" }} alt="loading" src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=1500&name=CSS%20infinite%20loading%20animation%20example.gif" />
        </div>
    } else if (status === "success") {

        content = <div className='Products_Main' style={{}}>
            {
                products.slice(page * 96 - 96, page * 96).map((item, index) => {
                    return <div id={item.id} className='p-1 col-lg-3 col-md-4 col-sm-2 col-xs-1  text-center' key={index}>
                        <div style={{ height: "60vh" }} className='border p-4 rounded Product_cart'>
                            <div style={{ height: "50%" }}> <img alt={item.title} width="80%" height="100%" src={item.image} /></div>
                            <h5 style={{ height: "20%", overflow: "hidden" }}>{item.title.substr(0, 45)}</h5>
                            <h5 style={{ height: "10%" }}>Special Price:${item.price}</h5>
                            <div className='text-center cartitems'>
                                <button onClick={() => dispatch(addToCart(item))} className='btn btn-primary m-1'>Add to Cart</button>
                                {/* <button  onClick={()=>dispatch(deleteFromCart(item))} className='btn btn-warning m-1' >Remove from Cart</button> */}
                            </div>
                        </div>
                    </div>
                })

                
            }
            {
                products.length > 0 && <div className="pagination">
                    <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

                    {[...Array(products.length / 96)].map((_, i) => {
                        return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                    })}

                    <span onClick={() => selectPageHandler(page + 1)} className={page < products.length / 96 ? "" : "pagination__disable"}>▶</span>
                </div>
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