import React from 'react';
import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <Link className="card text-center" to={"/detail/" + producto.id }> 
      <img src={producto.imagen} alt={producto.nombre} className="card-img-top" /> 
      <div className="card-body">
        <h4 className="card-title">{producto.nombre}</h4>
        <h5 className="card-text"> <strong>Precio:</strong> ${producto.precio}</h5>

        {/* <Link to={"/detail/" + producto.id } > Ver detalle</Link> */}

      </div>
    </Link>
  );
};

export default Item;
