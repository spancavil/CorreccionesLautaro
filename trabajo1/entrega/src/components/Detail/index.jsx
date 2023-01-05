import React from 'react'
import "./estilos.css"
const Detail = ({DetailMap}) => {
  return (
    <div>
        <h1>{DetailMap.titulo}</h1>
        <img src={DetailMap.img}/>
        
    </div>
  )
}

export default Detail