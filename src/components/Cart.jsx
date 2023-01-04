import React from "react";

const Cart = (props) => {
    
    return (
        <div className="cartContainer">
            <h1 className="title">Shopping Cart Overview</h1>
            <div className="cartItems">
                {props.order.length}
            </div>
        </div>
    )
}

export default Cart