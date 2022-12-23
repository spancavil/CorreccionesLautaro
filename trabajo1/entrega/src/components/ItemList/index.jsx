import React from 'react'
import Main from '../Main'


export const ItemList  = ({productos}) => {
    return (
    <div>
        {productos.map(producto =>{
            return <Main product={producto}/>
        })}
    </div>
    )
}


