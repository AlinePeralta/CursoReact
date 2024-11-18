import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

 
  if (cart.length == 0) {
    return (
      <div className="container d-flex align-items-center justify-content-center cartEmpty" >
  <div className="text-center">
  <img src="./public/search_empty.png" alt="Carrito vacío" className="img-fluid mb-4 cartEmptyImg"  />
    <h2 className="mb-4">No hay productos en el carrito </h2>

    <Link to="/">
      <button className="btn btn-uala">Volver al inicio</button>
    </Link>
  </div>
</div>

    );
  }

  return (
    <div className="container my-4 py-5">
      <h2 className="text-center mb-4 text-uala">Productos en el carrito</h2>

      <div className="card p-4 noneHover">
        {cart.map((productoCarrito, index) => (
          <div key={index} className="row align-items-center border-bottom py-3">
            <div className="col-12 col-md-2 text-center mb-3 mb-md-0">
              {productoCarrito.imagen && productoCarrito.imagen[0] ? (
                <img
                  src={productoCarrito.imagen[0]}
                  alt={productoCarrito.nombre}
                  className="img-fluid"
                  width={120}
                />
              ) : (
                <p>Imagen no disponible</p>
              )}
            </div>

            <div className="col-12 col-md-2 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-1 card-title">{productoCarrito.nombre}</p>
            </div>

            <div className="col-3 col-md-2 text-center mb-3 mb-md-0">
              <p className="mb-1">Cant: {productoCarrito.cantidad}</p>
            </div>

            <div className="col-3 col-md-2 text-center mb-3 mb-md-0">
              <p className="mb-1"> ${productoCarrito.precio}</p>
            </div>

            <div className="col-4 col-md-2 text-center mb-3 mb-md-0">
              <p className="mb-1">
                <strong>Total:</strong> ${productoCarrito.precio * productoCarrito.cantidad}
              </p>
            </div>

            <div className="col-2 col-md-1 text-center">
              <button
                onClick={() => deleteProductById(productoCarrito.id)}
                className="btn btn-uala sm"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}

        <div className="row mt-4">
          <div className="col text-end">
            <h5>
              <strong className="h5">Precio total:</strong> ${totalPrice()}
            </h5>
          </div>
        </div>

        <div className="row mt-3">
     
        <div className="col-12 text-end">
  <button onClick={deleteCart} className="btn btn-danger link">
    Borrar carrito
  </button>
  <Link to="/checkout" className="btn btn-uala">
    Terminar mi compra
  </Link>
</div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
