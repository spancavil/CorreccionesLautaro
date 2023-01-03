import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./estilos.css"
import productos from "../../data/juegos.json"
import ItemList  from '../../components/ItemList'

const Productos = () => {

    const [products, setProducts] = useState([])

    
    useEffect(()=> {

    const promesa = new Promise((acc, rec) => {
        setTimeout(() => {
            acc(productos);
        }, 3000);
    });

    promesa
    .then((result) => {
        setProducts(result);
    })
    .catch((err) => {
        alert("Hubo un error")
    });

    }, [])
    return (
        <div >
            <ItemList productos={products}></ItemList>
        </div>
        
    )
}


export default Productos