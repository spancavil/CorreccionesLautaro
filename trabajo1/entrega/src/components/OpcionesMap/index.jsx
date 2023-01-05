import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const OpcionesMap = ({product}) => {
    console.log(product)
    return (
        <div>

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Accordion Item #1
            </button>
            </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <h2>{product.titulo}</h2>
                <img className="imagenProducto" src={product.img}></img>
                <button className='botonAcordion'><FontAwesomeIcon icon={faCartShopping}/></button>
            </div>
        </div>
    </div>
    
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
    
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <h2>{product.titulo}</h2>
                <img className="imagenProducto" src={product.img}></img>
                <button className='botonAcordion'><FontAwesomeIcon icon={faCartShopping}/></button>
            </div>
        </div>
        </div>
        
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
            </button>
            </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <h2>{product.titulo}</h2>
                <img className="imagenProducto" src={product.img}></img>
                <button className='botonAcordion'><FontAwesomeIcon icon={faCartShopping}/></button>
            </div>
        </div>
    </div>
    </div>
</div>
    )
}

export default OpcionesMap