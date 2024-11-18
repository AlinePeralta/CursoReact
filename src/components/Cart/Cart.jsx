import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

  //Early return
    if(cart.length == 0){
        return(
            <div className="container my-4">
                   <h2 className="text-center mb-4">No hay productos en el carrito 😢 </h2>
                   <Link to="/"><button>Volver al inicio</button></Link>
            </div>
        )
    }

    //emojis windos  + .


  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Productos en el carrito</h2>

    <div className="card">
    {cart.map((productoCarrito, index) => (
        <div key={index} className="d-flex align-items-center border-bottom py-3">
     
          <div className="col-12 col-md-2 text-center">
            {productoCarrito.imagen && productoCarrito.imagen[0] ? (
              <img src={productoCarrito.imagen[0]} alt={productoCarrito.nombre} className="img-fluid" width={120} />
            ) : (
              <p>Imagen no disponible</p>
            )}
          </div>
   
          <div className="col-12 col-md-2 text-center text-md-start">
            <p className="mb-1 
            card-title">{productoCarrito.nombre}</p>
          </div>
        
          <div className="col-6 col-md-2 text-center">
            <p className="mb-1">Cantidad: {productoCarrito.cantidad}</p>
          </div>
    
          <div className="col-6 col-md-2 text-center">
            <p className="mb-1">Precio: ${productoCarrito.precio}</p>
          </div>
       
          <div className="col-12 col-md-2 text-center">
            <p className="mb-1"><strong>Total:</strong> ${productoCarrito.precio * productoCarrito.cantidad}</p>
          </div>

      
          <div className="col-12 col-md-1 text-center">
            <button onClick={() => deleteProductById(productoCarrito.id)}> X </button>
          </div>
        </div>
      ))}
    </div>

     
      <div className="row mt-4">
        <div className="col text-end">
          <h5><strong>Precio total:</strong> ${totalPrice()}</h5>
        </div>
        <div className="col text-end">
          <button onClick={deleteCart}>Borrar carrito</button>
        </div>
        <div>
          <Link to="/checkout">Terminar mi compra</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
