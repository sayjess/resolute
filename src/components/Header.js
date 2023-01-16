import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import Cart from "../pages/Cart"
import Photos from "../pages/Photos"

function Header() {
    return (
        <header>
            <Link to='/'><
                h2>Pic Some</h2>
            </Link>
            <Link to='/cart'>
                <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
            </Link>

            <Routes>
                <Route path='/' element={<Photos/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </header>
    )
}

export default Header