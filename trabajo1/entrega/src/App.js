import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from "../src/containers/ItemListeContainer"
import Main from './components/Main';
import Carrusel from './components/Carrusel';
import Footer from "./components/Footer"
import Productos from './containers/Productos';
import Detail from "./containers/ItemDetail";





function App() {
  return (


    <div>

      <body className='bodyIndex'>

        <Navbar
          categorias = "categorias"
          noticias = "noticias"
          ofertas = "ofertas"
        />

        <ItemListContainer greeting={"Descarga los juegos gratis mas famosos!!!"}/>

        
        <Carrusel/>


        <Main/>
        <Productos></Productos>

        <Detail></Detail>

        <Footer/>
      </body>

    </div>


  );
}

export default App;
