import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import avatar from "./assets/avatar.png";
// import Contador from './components/EjemplosClase/Contador';
// import ComponenteHijo from './components/EjemplosClase/ComponenteHijo';
// import ComponentePadre from './components/EjemplosClase/ComponentePadre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EjemploContadorEventListener from './components/EjemplosClase/EjemploContadorEventListener';
import EjemploFormulario from './components/EjemplosClase/EjemploFormulario';

import './App.css';

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer saludo="" className="container me-auto mb-2 mb-lg-0" />
            }
          />
          <Route
            path="/category/:idCategory"
            element={
              <ItemListContainer saludo="" className="container me-auto mb-2 mb-lg-0" />
            }
          />
             <Route
            path="/detail/:idProducto"
            element={
              <ItemDetailContainer saludo="" className="container me-auto mb-2 mb-lg-0" />
            }
          />
              <Route
            path="/ejemplos"
            element={
            <EjemploContadorEventListener/>
            }
          />

            <Route
            path="/form"
            element={
            <EjemploFormulario/>
            }
          />

        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
