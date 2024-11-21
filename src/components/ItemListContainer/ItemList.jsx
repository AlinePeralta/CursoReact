import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-4" key={producto.id}> 
          <Item producto={producto} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
