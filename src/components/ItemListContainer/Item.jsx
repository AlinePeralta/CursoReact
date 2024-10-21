import React from 'react';

const Item = ({ producto }) => {
  return (
    <div className="card text-center"> 
      <img src={producto.imagen} alt={producto.nombre} className="card-img-top" /> 
      <div className="card-body">
        <h4 className="card-title">{producto.nombre}</h4>
        <h5 className="card-text"> <strong>Precio:</strong> ${producto.precio}</h5>
      </div>
    </div>
  );
};

export default Item;
