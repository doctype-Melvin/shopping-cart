import React from "react";
import { useState } from "react";
const Product = (props) => {

    

    const productAndAmount = (e) => {
        props.setProduct({type: e.target.name, value: e.target.value})        
    }

    const addToOrder = () => {
        props.setOrder(prevState => {
            return [...prevState, props.product]
        })
        console.log(props.order)
    }

    return (
        <div className="productContainer" name={props.name}>
            <img className="image" src={props.url}></img>
            <span className="productName">{props.name} </span>
            <p className="productDescr">{props.description}</p>
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