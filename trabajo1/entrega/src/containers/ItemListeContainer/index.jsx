import React from 'react'
import "./estilos.css"

const ItemListContainer = ({greeting}) => {
    return (

        <div className='div'>
            <h2 className='h2'>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer