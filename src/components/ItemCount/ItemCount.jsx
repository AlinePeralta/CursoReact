import { useState } from "react";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickRest = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
      
        <div className="col-2">
          <button onClick={handleClickRest} className="btn btn-outline-secondary w-100">
            -
          </button>
        </div>

    
        <div className="col-2 text-center">
          <p className="mb-0">{count}</p>
        </div>

      
        <div className="col-2">
          <button onClick={handleClickAdd} className="btn btn-outline-secondary w-100">
            +
          </button>
        </div>

        <div className="col-6 mt-2 mt-md-0">
          <button onClick={() => addProduct(count)} className="btn btn-primary w-100">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
