import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
const Product = (props) => {

    const productAndAmount = (e) => {
        let total = e.target.value * props.price
        props.setProduct({
            id: props.id, 
            type: e.target.name, 
            value: e.target.value, 
            price: props.price, 
            total,
            calc() {
            return this.price * this.value
            }
        })        
    }

    const addToOrder = () => {
        if (props.order.every(item => item.id !== props.product.id)) {
            props.setOrder(prevState => {
                return [...prevState, props.product]
            })
        } else {
         return null
        }
        
    }

    const modalToggle = () => {
        props.setShowModal(prevState => !prevState)
        console.log(props.showModal)
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
                className="addItem"
                onClick={() => {
                    addToOrder(),
                    modalToggle()
                }
            }
                >Add to Cart</button>
            </div>
        </div>
    )
}

export default Product