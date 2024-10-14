import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import avatar from "./assets/avatar.png"
import Contador from './components/EjemplosClase/Contador'
import ComponenteHijo from './components/EjemplosClase/ComponenteHijo'
import ComponentePadre from './components/EjemplosClase/ComponentePadre'

import './App.css'

function App() {
 
  return (
<div> 


<NavBar/>
<ItemListContainer saludo ={"prueba hola"}/>
<ItemListContainer saludo ={"Este es un promp 2"}/>

{/* <ComponentePadre>
 <h2>Saludos desde app</h2>
 <ComponenteHijo/>
 <ComponenteHijo/>
 <ComponenteHijo/>

 <h2>Saludo2 desde app</h2>
</ComponentePadre> */}

</div>
  )
}

export default App
