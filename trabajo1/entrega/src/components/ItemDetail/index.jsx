import React from 'react'
import Detail from '../Detail'

const ItemDetail = ({detail}) => {
    console.log(detail)
  return (
    <div>
        {detail.map(producto => {
            return <Detail DetailMap={producto}/>
        })}
    </div>
  )
}

export default ItemDetail