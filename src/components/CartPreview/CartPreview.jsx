import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartPreview = () => {
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  return (
    <div className="cart-preview">
      {cart.length === 0 ? (
        <p className="cartEmpty-preview">Tu carrito está vacío 😢</p>
      ) : (
        <div>
          <div className="row align-items-center">
            {cart.slice(0, 3).map((producto, index) => (
              <div key={index} className="col-12 mb-3">
             
                <p className="text-uala acent">{producto.nombre}</p>

                <div className="d-flex align-items-center">
              
                  <img src={producto.imagen[0]}  alt={producto.nombre}  width={40} className="me-3"
                  />

              
                  <div className="d-flex justify-content-between w-100">
                    <p>Cant: {producto.cantidad}</p>
                    <p className="ms-auto">${producto.precio * producto.cantidad}</p>
                  </div>
                </div>

              
                <hr className="product-divider2" />
              </div>
            ))}
          </div>
          <div className="cart-preview-total mt-3">
            <p><strong>Total:</strong> ${totalPrice()}</p>
            <Link to="/cart">
              <button className="btn btn-outline-primary">Ver carrito</button>
            </Link>
          </div>

          <div className="text-center mt-2">
            <button onClick={deleteCart} className="btn btn-danger link">Eliminar carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPreview;
