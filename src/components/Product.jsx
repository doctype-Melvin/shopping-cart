import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
const Product = (props) => {

    const productAndAmount = (e) => {
        let total = e.target.value * props.price
        props.setProduct({id: nanoid(), type: e.target.name, value: e.target.value, total })        
    }

    const addToOrder = () => {
        props.setOrder(prevState => {
            return [...prevState, props.product]
        })
    }

    return (
        <div className="productContainer" name={props.name}>
            <img className="image" src={props.url}></img>
            <span className="productName">{props.name} </span>
            <p className="productDescr">{props.description}</p>
            <span className="priceTag">{props.price}</span>
            <div className="addToCart" >
                <input 
                className="amount"
                type="number"
                name={props.name}
                onChange={productAndAmount}
                ></input>
                <button
                onClick={addToOrder}
                >Add to Cart</button>
            </div>
        </div>
    )
}

export default Product