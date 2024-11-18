import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartPreview = () => {
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  return (
    <div className="cart-preview">
      {cart.length === 0 ? (
        <p className="cartEmpty-preview">Tu carrito está vacío  😢</p>
      ) : (
        <div>
          <div className="row">
            {cart.slice(0, 3).map((producto, index) => ( 
              <div key={index} className="col-12 d-flex align-items-center mb-3">
                <img src={producto.imagen[0]} alt={producto.nombre} width={40} className="me-3" />
                <div>
                  <p>{producto.nombre}</p> 
                  <p>Cant: {producto.cantidad}</p> 
                </div>
                <p className="ms-auto">${producto.precio * producto.cantidad}</p>
              </div>
            ))}
          </div>
          <div className="cart-preview-total mt-3">
            <p>Total: ${totalPrice()}</p>
            <Link to="/cart"><button className="btn btn-primary">Ver carrito</button></Link>
          </div>
          
          <div className="text-end mt-2">
            <button onClick={deleteCart} className="btn btn-danger">Eliminar carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPreview;
