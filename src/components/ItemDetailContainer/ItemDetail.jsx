import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./Itemdetail.scss";

const ItemDetail = ({ producto }) => {
  const [currentImage, setCurrentImage] = useState(
    producto.imagen && producto.imagen[0] ? producto.imagen[0] : ""
  );
  

  
  const images = producto.imagen.filter((imagen) => imagen !== currentImage);

  const { addProductInCart } = useContext(CartContext);

  const [showItemCount, setItemCount] = useState(true);


  const addProduct = (count) => {
    const productoCarrito = { ...producto, cantidad: count };
    addProductInCart(productoCarrito);
    setItemCount(false); 
  };

  return (
    <div className="container my-4">
      <div className="card item-detail">
        <div className="row g-0 item-detail-container">
          {/* Imagen secundaria */}
          <div className="col-md-2 secundary-image">
            {images.map((imagen) => (
              <img
                src={imagen}
                key={imagen}
                alt="imagen del producto"
                onClick={() => setCurrentImage(imagen)}
                className="img-thumbnail"
              />
            ))}
          </div>

          {/* Imagen principal */}
          <div className="col-md-4 main-image">
            <img src={currentImage} alt={producto.nombre} className="img-fluid rounded-start" />
          </div>

          {/* Detalles del producto */}
          <div className="col-md-6">
            <div className="card-body text-center text-md-start">
              <h4 className="card-title">{producto.nombre}</h4>
              <p className="card-text">{producto.descripcion}</p>
              <h5 className="card-text">
                <strong>Precio:</strong> ${producto.precio}
              </h5>

              {/* Mostrar ItemCount o link para terminar compra */}
              {showItemCount ? (
                <ItemCount stock={producto.stock} addProduct={addProduct} />
              ) : (
                <Link to="/cart" className="btn btn-primary">
                  Terminar mi compra
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
