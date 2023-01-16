import React from "react"
import Header from "./components/Header"

import Photos from './pages/Photos'
import Cart from './pages/Cart'
import { Route, Routes } from "react-router-dom"

function App() {    
    return (
        <div>     
            <Header />
            <h1>Home Page</h1>
            <Routes>
                <Route path="/" element={<Photos />}/>
                <Route path="cart" element={<Cart />}/>
            </Routes>       
        </div>
    )
}

export default App