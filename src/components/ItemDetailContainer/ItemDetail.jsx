import { useState } from "react";
import "./Itemdetail.scss";

const ItemDetail = ({ producto }) => {
  const [currentImage, setCurrentImage] = useState(producto.imagen ? producto.imagen[0] : "");

  const images = producto.imagen.filter((imagen)=> imagen !== currentImage )

  return (
    <div className="container my-4">
      <div className="card item-detail">
        <div className="row g-0 item-detail-container">
        <div className="col-md-2 secundary-image">
         {
          images.map((imagen)=> (
            <img src={imagen} key={imagen}  onClick={ () => setCurrentImage(imagen) }/>
          ))
         }
        </div>

          <div className="col-md-4 main-image">
            <img src={currentImage} alt={producto.nombre} className="img-fluid rounded-start" />
          </div>

        
          <div className="col-md-6">
            <div className="card-body text-center text-md-start">
              <h4 className="card-title">{producto.nombre}</h4>
              <p className="card-text">{producto.descripcion}</p>
              <h5 className="card-text">
                <strong>Precio:</strong> ${producto.precio}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
