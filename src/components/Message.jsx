// Modal component
// Toggle state on and off by adding item to cart
// Change message depending on point in order path
import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Message = (props) => {

    const closeModal = () => {
        props.setShowModal(prevState => !prevState)
    }

    const reduceAmount = () => {
        return props.order.length < 1 ? null : props.order.map(item => item.total)
        .reduce((a, b) => a + b).toFixed(2) 
     }

    return (
        <div className="modalContainer">
            <button 
            className="modalClose"
            type="button"
            onClick={closeModal}
            >X</button>
            <div className="modalTitle">Cart Overview</div>
            <div className="overview">
            {props.order.map(item => {
                    return (
                        <Card
                        id={item.id}
                        key={item.id}
                        name={item.type}
                        amount={item.value}
                        total={item.total}
                        order={props.order}
                        setOrder={props.setOrder}
                        showModal={props.showModal}
                        />
                    )
                })}
            <div className="modalSum">Total: {reduceAmount()}</div>
            <NavLink className="goCart" to="/shopping-cart/components/Cart"><button onClick={closeModal} type="button">Go To Cart</button></NavLink>
            </div>
        </div>
    )
}

export default Message