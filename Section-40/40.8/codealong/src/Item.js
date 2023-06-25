import { useState } from "react";

const Item = ({id,name,qty}) => {
 return (
    <div>
        <ul>
            <li>Product Name: {name}</li>
            <li>Quantity: {qty}</li>
        </ul>
    </div>
 )
}


export default Item;