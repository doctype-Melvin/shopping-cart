import React from "react";

const Card = (props) => {

    // This finds the object in the order array
    const findOrderItem = () => props.order.find(item => item.id === props.id)

    // Find the to edit object and set its value
    // Needs a way to update the state - substitute old object with new object
    // Recalculate the total price
    const editItem = (e) => {
        const obj = findOrderItem()
        obj.value = e.target.valueAsNumber
        console.log(obj, e.target.valueAsNumber)
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
        </div>
    )
}

export default Card