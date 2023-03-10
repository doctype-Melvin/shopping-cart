import React from "react";
import { Tooltip } from "@mui/material";

const Card = (props) => {

    // This finds the object in the order array
    const findOrderItem = () => props.order.find(item => item.id === props.id)

    const editItem = (e) => {
        const obj = findOrderItem() // Find object
        obj.value = e.target.valueAsNumber // Set value to input value
        obj.total = obj.calc() // Call method to recalculate total
        let indexFind = props.order.findIndex(i => i.id === obj.id) // Find obj index in original arr
        let newOrder = [...props.order] // Copy original array
        newOrder[indexFind] = obj // Replace obj in arr at index with updated obj
        props.setOrder(newOrder) // Set state with updated array
    }

    const deleteItem = (e) => {
        const whatIndex = props.order.findIndex(i => i.id === e.target.id)
        props.order.splice(whatIndex, 1)
        const newOrder = [...props.order]
        props.setOrder(newOrder)
    }


    return (
        <div className={props.showModal ? "itemModal" : "item"}>
            {/* Inputs needed to change items/delete items */}
            {props.showModal ? <span>{props.amount}</span> :
            <input
            className="adjustItems"
            type="number"
            defaultValue={props.amount}
            onChange={editItem}  
            />}

            
            <span className="itemName">{props.name}</span>
            <span className="itemTotal">{props.total}</span>
            {props.showModal ? null : <Tooltip 
            title={<span style={{fontSize: '13px'}}>Delete</span>} 
            className="deleteTool"
            placement="right"
            >
                <button
                className="deleteBtn"
                type="button"
                onClick={deleteItem}
                id={props.id}
                >X</button>
            </Tooltip>}
        </div>
    )
}

export default Card