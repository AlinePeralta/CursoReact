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
    <div className="container mt-4">
      <div className="row align-items-center justify-content-center">
        <div className="col-3 col-sm-2">
          <button
            onClick={handleClickRest}
            className="btn btn-outline-primary w-100 py-2"
          >
            -
          </button>
        </div>

        <div className="col-4 col-sm-2 text-center">
          <p className="mb-0 h4">{count}</p>
        </div>

        <div className="col-3 col-sm-2">
          <button
            onClick={handleClickAdd}
            className="btn btn-outline-primary w-100 py-2"
          >
            +
          </button>
        </div>

        <div className="col-12 col-sm-6 mt-3 mt-sm-0">
          <button
            onClick={() => addProduct(count)}
            className="btn btn-uala w-100 py-2"
          >
            Agregar al carrito
          </button>
        </div>

      
      </div>
    </div>
  );
};

export default ItemCount;
