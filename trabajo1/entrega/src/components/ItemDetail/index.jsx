import React from 'react'
import Detail from '../Detail'

const ItemDetail = ({detail}) => {
    console.log(detail)
  return (
    <div>
        {detail.nombre}
    </div>
  )
}

export default ItemDetail