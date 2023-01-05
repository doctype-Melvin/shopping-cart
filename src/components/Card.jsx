import React from "react";

const Card = (props) => {

    // This finds the object in the order array
    const findOrderItem = () => props.order.find(item => item.id === props.id)

    const editItem = (e) => {
        const obj = findOrderItem()
        obj.value = e.target.valueAsNumber
        obj.total = obj.calc()
        let indexFind = props.order.findIndex(i => i.id === obj.id)
        let newOrder = [...props.order]
        newOrder[indexFind] = obj
        props.setOrder(newOrder)
    }


    return (
        <div className="item">
            <img></img>
            {/* Inputs needed to change items/delete items */}
            <input 
            type="number"
            defaultValue={props.amount}
            onChange={editItem}  
            />

            
            <span>{props.name}</span>
            <span>{props.total}</span>
            <button className="deleteBtn">X</button>
        </div>
    )
}

export default Card