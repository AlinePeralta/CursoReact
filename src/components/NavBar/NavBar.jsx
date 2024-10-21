import CardWidget from "./CardWidget";
import "./navbar.scss";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container text-center">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logoBrand d-inline-block align-text-top" />
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
            Terminales TPV
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
           Accesorios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
           Promociones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
        Beneficios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
            Contacto
              </a>
            </li>
        
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
         
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
