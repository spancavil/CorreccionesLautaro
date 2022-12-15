import React from "react";
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function(){
    return (
    
<div>
    <main className='main'>
        <article>
            <img className='imagenes' src="https://cdn.cloudflare.steamstatic.com/steam/apps/202970/capsule_616x353.jpg?t=1654830020" alt="bo2" />
            <h3>Call of Duty: Black Ops 2</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <img className='imagenes'src="https://img.zonared.com/images/videos/fondos/13500/13573.jpg" alt="gta" />
            <h3>Grand Theft Auto V</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <img className='imagenes'src="https://as01.epimg.net/meristation/imagenes/2022/01/07/noticias/1641554478_180568_1641554562_portada_normal.jpg" alt="days" />
            <h3 >Days Gone</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>

        <article>
            <img className='imagenes'src= "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/12/Resident-Evil-21-scaled.jpg?fit=2560%2C1321&quality=50&strip=all&ssl=1" alt="resident" />
            <h3>Resident Evil 2</h3>
            <button className='boton'><FontAwesomeIcon icon={faCartShopping}/></button>
        </article>



    </main>
</div>
    );
}