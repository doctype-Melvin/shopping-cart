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

    // useEffect(() => {
    //     console.log(order)
    // }, [order])

    return (
        <BrowserRouter>
            <div className="navbar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/shopping-cart/components/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/shopping-cart/components/Shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/shopping-cart/components/Cart">Cart {`(${order.length})`}</Link>
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
            />} />
            <Route path="/shopping-cart/components/Cart" element={<Cart
            setOrder={setOrder}
            order={order}
            setProduct={setProduct}
            product={product}
            />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch