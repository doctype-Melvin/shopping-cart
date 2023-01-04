import React from "react";
import Product from "./Product";
import products from "../data"

const Shop = () => {

    const mapper = products.map(item => {
        return (
            <Product 
            url={item.url}
            name={item.name}
            description={item.description}
            key={item.id}
            />
        )
    })

    return (
        <div className="shopContainer">
            <h1 className="title">Beauty, Wellness & Spa</h1>
            <p className="description">Our products are organically sourced</p>
            <div className="productGrid">
                {mapper}
            </div>
            
        </div>
    )
}

export default Shop