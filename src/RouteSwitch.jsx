import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/shopping-cart/components/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/shopping-cart/components/Shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/shopping-cart/components/Cart">Cart</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        <Routes>
            <Route path="/shopping-cart/" element={<Home />} />
            <Route path="/shopping-cart/components/Home" element={<Home />} />
            <Route path="/shopping-cart/components/Shop" element={<Shop />} />
            <Route path="/shopping-cart/components/Cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch