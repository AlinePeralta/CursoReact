import CartWidget from "./CartWidget"
import "./assets/componets/navbar.css"

const NavBar=() => {
//VISTA

    return( //LO QUE SE VE EN PANTALLA, SOLO UN ELEMENTO PADRE <> //ENCAPSULA LOS ELEMENTOS SOLO EN CASOS ESPECIFICOS

      <nav className="navbar">
      <div className="brand"> 
        <h1> logo</h1>
        </div>
        
        <CartWidget/>
      </nav>
    

    )    
}
export default NavBar