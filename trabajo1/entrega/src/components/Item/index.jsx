import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons'

export const item = ({product}) => {
  return (
    <div>
        <article>
            <h3>{product.titulo}<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src={product.img} alt="resident" />
            <h3>{product.nombre}</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>
    </div>
  )
}
