import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import CartPreview from "../CartPreview/CartPreview";
import { Link } from "react-router-dom";

const CardWidget = () => {
  const { totalCantidad } = useContext(CartContext);
  const cantidad = totalCantidad();

  return (
    <div className="bagItemContainer" style={{ position: 'relative' }}>
      <Link to="/cart" className="bagItem">
        <i
          className="fas fa-shopping-bag"
          style={cantidad === 0 ? { color: "rgb(161, 161, 161)" } : { color: "#ed1d78" }}
        ></i>
        
        <span className={`bagItemNum ${cantidad === 0 ? "desactive" : "active"}`}>
          <p>{cantidad >= 1 && cantidad}</p>
        </span>
      </Link>

  
      <div className="cartPreviewContainer">
        <CartPreview />
      </div>
    </div>
  );
};

export default CardWidget;
