import React from 'react'
import Item from "../Item"


export const ItemList  = ({productos}) => {
    return (
    <div>
        {productos.map(producto =>{
            return <Item product={producto}/>
        })}
    </div>
    )
}


