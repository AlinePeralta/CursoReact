import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Beneficios from './components/Beneficios/beneficios';
import Contacto from './components/Contacto/Contacto';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme='light'/>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<ItemListContainer saludo="" className="container me-auto mb-2 mb-lg-0" />} />
              <Route path="/category/:idCategory" element={<ItemListContainer saludo="" className="container me-auto mb-2 mb-lg-0" />} />
              <Route path="/detail/:idProducto" element={<ItemDetailContainer saludo="" className="container me-auto mb-2 mb-lg-0" />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/beneficios" element={< Beneficios />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </div>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
