import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect } from "react";

const RouteSwitch = () => {
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState([])
    const [showModal, setShowModal] = useState(false)
    let totalItems = () => {
       return order.length > 0 ? order.map(item => parseInt(item.value))
        .reduce((a, b) => a+b) :
        0
    }

    useEffect(() => {
        totalItems() 
    }, [order])

    return (
        <BrowserRouter>
            <div className="navbar">
                <nav>
                    <ul className="navlinks">
                        <li>
                            <Link className="link" to="/shopping-cart/components/Home">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/shopping-cart/components/Shop">Shop</Link>
                        </li>
                        <li>
                            <Link className="link" to="/shopping-cart/components/Cart">Cart {`(${totalItems()})`}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        <Routes>
            <Route path="/shopping-cart/" element={<Home 
            setOrder={setOrder} 
            order={order} 
            setProduct={setProduct}
            product={product}
            />} />
            <Route path="/shopping-cart/components/Home" element={<Home
            setOrder={setOrder}
            order={order} 
            setProduct={setProduct}
            product={product}
            />} />
            <Route path="/shopping-cart/components/Shop" element={<Shop
            setOrder={setOrder}
            order={order} 
            setProduct={setProduct}
            product={product}
            showModal={showModal}
            setShowModal={setShowModal}
            />} />
            <Route path="/shopping-cart/components/Cart" element={<Cart
            setOrder={setOrder}
            order={order}
            setProduct={setProduct}
            product={product}
            showModal={showModal}
            setShowModal={setShowModal}
            />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch