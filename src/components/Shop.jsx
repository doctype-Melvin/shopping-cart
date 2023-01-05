import React from "react";
import Product from "./Product";
import products from "../data"
import { useState } from "react";
import Message from "./Message";

const Shop = (props) => {

    

    const mapper = products.map(item => {
        return (
            <Product 
            url={item.url}
            name={item.name}
            description={item.description}
            price={item.price}
            id={item.id}
            key={item.id}
            setOrder={props.setOrder}
            order={props.order}
            setProduct={props.setProduct}
            product={props.product}
            showModal={props.showModal}
            setShowModal={props.setShowModal}
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
            {props.showModal ? <Message 
            setShowModal={props.setShowModal} 
            showModal={props.showModal}
            order={props.order}
            /> : null}
        </div>
    )
}

export default Shop