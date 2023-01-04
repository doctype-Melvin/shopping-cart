import React from "react";

const Product = (props) => {
    console.log(props)
    return (
        <div className="productContainer">
            <img className="image" src={props.url}></img>
            <span className="productName">{props.name} </span>
            <p className="productDescr">{props.description}</p>
            <div className="addToCart">
                <input 
                className="amount"
                type="number"
                name="amount"
                ></input>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product