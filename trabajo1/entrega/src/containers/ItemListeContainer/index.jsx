import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./estilos.css"
import productos from "../../data/juegos.json"
import { ItemList } from '../../components/ItemList'

const ItemListContainer = ({greeting}) => {

    const [products, SetProductos] = useState([])

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{

            res(productos)
        })

        promesa
        .then((result)=>{
            SetProductos(result);
        })
        .catch(()=>{
            alert("error")
        })
    },[])

    

    return (
        <div>
            <div className='div'>
                <h2 className='h2'>{greeting}</h2>
            </div>
            <ItemList productos={products}></ItemList>
        </div>
        
    )
}

export default ItemListContainer