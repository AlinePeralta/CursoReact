import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import avatar from "./assets/avatar.png"
import Contador from './components/EjemplosClase/Contador'
import ComponenteHijo from './components/EjemplosClase/ComponenteHijo'
import ComponentePadre from './components/EjemplosClase/ComponentePadre'

import './App.css'

function App() {
 
  return (
<div className='container-app'> 


<NavBar/>
<div className='container me-auto mb-2 mb-lg-0 mt-2'>
<ItemListContainer saludo ={""}/>


</div>


</div>
  )
}

export default App
