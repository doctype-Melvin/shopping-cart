import React from "react";

const Card = (props) => {
    return (
        <div className="item">
            <img></img>
            <span>{props.amount}</span>
            <span>{props.name}</span>
            <span>{props.total}</span>
        </div>
    )
}

export default Card