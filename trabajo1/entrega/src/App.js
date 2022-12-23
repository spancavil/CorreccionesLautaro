import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './containers/ItemListeContainer';
import Main from './components/Main';
import Carrusel from './components/Carrusel';
import Footer from "./components/Footer"





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

        <Footer/>
      </body>

    </div>


  );
}

export default App;
