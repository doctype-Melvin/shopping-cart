import React from "react";
import Card from "./Card";
import { useEffect } from "react";

const Cart = (props) => {

    const reduceAmount = () => {
        return props.order.length > 0 ?
         props.order.map(item => item.total).reduce((a, b) => a + b).toFixed(2) :
         'No items yet'
     }

    useEffect(() => {
    }, [props.order])
    
    return (
        <div className="cartContainer">
            <h1 className="title">Shopping Cart Overview</h1>
            {props.order.length > 0 && <div className="orderDetails">
                {props.order.map(item => {
                    return (
                        <Card
                        id={item.id}
                        key={item.id}
                        name={item.type}
                        amount={item.value}
                        total={item.total.toFixed(2)}
                        order={props.order}
                        setOrder={props.setOrder}
                        />
                    )
                })}
            </div>}
            <div className="summary">
                {'Total: ' + reduceAmount()}
            </div>
        </div>
    )
}

export default Cart