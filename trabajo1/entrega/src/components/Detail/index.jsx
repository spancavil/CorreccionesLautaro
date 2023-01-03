import React from 'react'
import DetailMap from '../DetailMap'

const Detail = ({productos}) => {
    return (
        <div>
            {productos.map(producto=>{
                return <DetailMap map={producto} ></DetailMap>
            })}
        </div>
    )
}

export default Detail