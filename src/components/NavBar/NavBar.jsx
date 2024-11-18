import CardWidget from "./CardWidget";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container text-center">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logoBrand d-inline-block align-text-top" />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center categories">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item category">
              <Link to="/category/terminales" className="nav-link">Terminales TPV</Link>
            </li>
            <li className="nav-item category">
              <Link to="/category/accesorios" className="nav-link">Accesorios</Link>
            </li>
            <li className="nav-item category">
              <Link to="/category/promociones" className="nav-link">Promociones</Link>
            </li>
            <li className="nav-item category">
              <Link to="/beneficios" className="nav-link">Beneficios</Link>
            </li>
            <li className="nav-item category">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
          </ul>
          
          <form className="d-flex">
            <CardWidget />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
