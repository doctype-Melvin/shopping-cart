import React, { useEffect } from "react";

const Product = (props) => {

    const productAndAmount = (e) => {
        if (e.target.value > 0 ) {
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
        } else {
            return
        }
    }

    const addToOrder = (e) => {
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
                min="1"
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