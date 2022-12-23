import React, { useEffect } from "react";
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus, faX, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export default function({product}){

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
        if(cont === 0){
            bloquear(true)
        }

        else if(cont > 0){
            bloquear(false)
        }   

    })

return (

<div>
    <main className='main'>


    <article>
            <h3>Shooters<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes' src="https://cdn.cloudflare.steamstatic.com/steam/apps/202970/capsule_616x353.jpg?t=1654830020" alt="bo2" />
            <h3>Call of Duty: Black Ops 2</h3>
            <button className='boton'onClick={agregar}><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <h3>mundo abierto<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src="https://img.zonared.com/images/videos/fondos/13500/13573.jpg" alt="gta" />
            <h3>Grand Theft Auto V</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>

            <h3>Zombies<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src="https://as01.epimg.net/meristation/imagenes/2022/01/07/noticias/1641554478_180568_1641554562_portada_normal.jpg" alt="days" />
            <h3 >Days Gone</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <h3>Survival Horror<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src= "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/12/Resident-Evil-21-scaled.jpg?fit=2560%2C1321&quality=50&strip=all&ssl=1" alt="resident" />
            <h3>Resident Evil 2</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <h3>Aventura<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src= "https://i.blogs.es/09a281/uncharted400/1366_2000.jpg" alt="resident" />
            <h3>Uncharted</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <h3>Supervivencia<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src= "https://store.playstation.com/store/api/chihiro/00_09_000/container/AR/es/99/UP0240-CUSA10518_00-THEFOREST0000000/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720" alt="resident" />
            <h3>The forest</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <h3>Deportes<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src= "https://i.blogs.es/5a54fa/bowvc0q9dfw6qhgvx9dd13sr/1366_2000.jpeg" alt="resident" />
            <h3>Fifa 23</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <h3>Free to play<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src= "https://i.pinimg.com/originals/53/23/12/53231242393e0d3c1994950c4faff6df.jpg" alt="resident" />
            <h3>League of Legends</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <h3>Terror<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src= "https://sitiodelegir.files.wordpress.com/2015/08/fredbear.png?w=640" alt="resident" />
            <h3>Five Nights at Freddy's 4</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <h3>{product.titulo}<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src={product.img} alt="resident" />
            <h3>{product.nombre}</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>
        
        <article>
            <h3>Clasicos<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src= "https://i.cnnturk.com/i/cnnturk/75/740x416/60feabc4c8c37312bcfe2d98.jpg" alt="resident" />
            <h3>GTA: San Andreas</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        

    </main>
        <p><FontAwesomeIcon icon={faCartShopping} className="carrito"/>
            <span className="span">{cont}</span>
        </p>
        <button className="X"><FontAwesomeIcon icon={faX} onClick={quitar}/></button>
        <button className="check"><FontAwesomeIcon icon={faCheck} onClick= {finalizar}/></button>
        <button className="trash"><FontAwesomeIcon icon={faTrash} onClick= {finalizar}/></button>
        
</div>
    );
}


