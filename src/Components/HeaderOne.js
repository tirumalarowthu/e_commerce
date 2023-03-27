import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTotal } from '../Redux/cartSlice'
import "./HeaderStyles.css"
const HeaderOne = () => {
    const dispatch = useDispatch()
    const totalQuantity = useSelector((state) => state.cart.totalCartQuantity)
    const cartItems = useSelector((state) => state.cart.cartItems)
    useEffect(() => {
        dispatch(getTotal())
    }, [dispatch, cartItems])
    return (<div className='nav header_div '>
        <ul className='nav nav_header'>
            <li className='nav-items'><Link to="/">Home</Link></li>
            <li className='nav-items'><Link to="/">Products</Link></li>
            <li className='nav-items'><Link to="/login">Login</Link></li>
            <li className='nav-items cart_Items'><Link to="/cart"><ion-icon size="large" name="cart-outline"></ion-icon> Cart({totalQuantity})</Link></li>
        </ul>
    </div>
    )
}
export default HeaderOne


