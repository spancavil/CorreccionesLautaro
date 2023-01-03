import React from 'react'
import "./estilos.css"


const ItemListeContainer = ({greeting}) => {

    return (
        <div>
            <div className='div'>
                <h2 className='h2'>{greeting}</h2>
            </div>
        </div>
        
    )
}

export default ItemListeContainer