import NavBar from './assets/componets/navbar/NavBar'
import ItemListContainer from './assets/componets/itemListContainer/itemlistContainer'
import './App.css'

function App() {
  

  return (
  
    <div>
      <NavBar/>
      <ItemListContainer saludo={"hola"} />
    </div>
  )
}

export default App
