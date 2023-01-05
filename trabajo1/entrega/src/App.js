import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from "../src/containers/ItemListeContainer"
import Main from './components/Main';
import Carrusel from './components/Carrusel';
import Footer from "./components/Footer"
import Productos from './containers/Productos';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer';





function App() {
  return (


    <div>
      <BrowserRouter>
      <body className='bodyIndex'>

        <Navbar
          categorias = "categorias"
          noticias = "noticias"
          ofertas = "ofertas"
        />
        <ItemListContainer greeting={"Descarga los juegos gratis mas famosos!!!"}/>

        <Carrusel/>

        <Main/>
      
        <Routes>
          <Route path='/' element={<Productos/>}></Route>
          <Route path='/category/:categoryId' element={<Productos/>}></Route>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<img src="https://media1.popsugar-assets.com/files/thumbor/bywOuqGgKUqWwJiz-x5fTA5idUg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/12/11/821/n/1922283/86de75647a77d736_Interstellar-McConaughey-holding-model-spacecraft/i/Cooper-Interstellar.jpg"/>}></Route>
        </Routes>

        

        <Footer/>
        </body>
        </BrowserRouter>
      

    </div>


  );
}

export default App;
