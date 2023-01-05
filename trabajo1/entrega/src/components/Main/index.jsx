import React, { useEffect } from "react";
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus, faX, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export default function(){

    const [cont, carrito] = useState(0)
    const [block, bloquear] = useState(false)

    const agregar = () =>{
        carrito(cont + 1)

    }

    const quitar = () =>{

        if(!block){
            carrito(cont -1)
        }
        
    }


    const finalizar = () =>{

        carrito(cont - cont)
    }

    useEffect(()=>{
        if(cont < 1){
            bloquear(true)
        }
        
        else if(cont > 0){
            bloquear(false)
        }

    })

    

return (

<div>

    <p><FontAwesomeIcon icon={faCartShopping} className="carrito"/>
        <span className="span">{cont}</span>
    </p>
    <button className="X"><FontAwesomeIcon icon={faX} onClick={quitar}/></button>
    <button className="check"><FontAwesomeIcon icon={faCheck} onClick= {finalizar}/></button>
    <button className="trash"><FontAwesomeIcon icon={faTrash} onClick= {finalizar}/></button>
        
</div>
    );
}


