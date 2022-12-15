import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './containers/ItemListeContainer';
import Main from './components/Main/Main';
import Carrusel from './components/Carrusel';



function App() {
  return (


    <div>

      <body className='bodyIndex'>
      
        <Navbar
          categorias = "categorias"
          noticias = "noticias"
          ofertas = "ofertas"
        />

        <Carrusel/>

        <ItemListContainer greeting={"hola"}/>

        <Main/>


      </body>

    </div>


  );
}

export default App;
