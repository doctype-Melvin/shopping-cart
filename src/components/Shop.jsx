import React from "react";
import Product from "./Product";
import products from "../data"
import { useState } from "react";

const Shop = (props) => {

    const mapper = products.map(item => {
        return (
            <Product 
            url={item.url}
            name={item.name}
            description={item.description}
            key={item.id}
            setOrder={props.setOrder}
            order={props.order}
            setProduct={props.setProduct}
            product={props.product}
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