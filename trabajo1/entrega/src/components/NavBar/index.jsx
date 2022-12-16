import React from "react";
import "./estilos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function({ofertas,noticias,categorias}){
    return (

    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><p className="titulo">StoreGames</p></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="#">{noticias}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active">{ofertas}</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{categorias}
                    </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Shooters</a></li>
                    <li><a className="dropdown-item" href="#">Aventura</a></li>
                    <li><a className="dropdown-item" href="#">Deportes</a></li>
                    <li><a className="dropdown-item" href="#">Supervivencia</a></li>
                    <li><a className="dropdown-item" href="#">Mundo Abierto</a></li>
                    <li><a className="dropdown-item" href="#">Free to play</a></li>
                    <li><a className="dropdown-item" href="#">Survival Horror</a></li>
                    <li><a className="dropdown-item" href="#">Zombies</a></li>
                    <li><a className="dropdown-item" href="#">Terror</a></li>
                    <li><a className="dropdown-item" href="#">Clasicos</a></li>

                </ul>
                </li>

                

            </ul>
            </div>
        </div>  
        <p><FontAwesomeIcon icon={faCartShopping} className="carrito"/>
        <span className="span">2</span>
        </p>
    </nav>
    </div>
    )
}

