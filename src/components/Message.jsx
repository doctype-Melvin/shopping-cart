// Modal component
// Toggle state on and off by adding item to cart
// Change message depending on point in order path
import React from "react";
import Card from "./Card";

const Message = (props) => {

    const closeModal = () => {
        props.setShowModal(prevState => !prevState)
    }

    return (
        <div className="modalContainer">
            <button 
            type="button"
            onClick={closeModal}
            >X</button>
            Hello World
            <div>
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
            </div>
            
        </div>
    )
}

export default Message