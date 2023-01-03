import React, { useEffect } from 'react'
import { useState } from 'react'
import Detail from '../../components/Detail'

const ItemDetail = () => {

    const [detail, setDetail] = useState({})

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(result=> {
    
            return result.json()
        })
        .then(json=>{
            console.log(json)
            setDetail(json)
        })
    },[])

    

    
    return (
        <div>
            <Detail productos={detail}></Detail>
        </div>
    )
}

export default ItemDetail