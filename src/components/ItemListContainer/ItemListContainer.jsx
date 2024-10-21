
import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import "./ItemList.scss"

const ItemListContainer = ({saludo}) => {

    const [productos, setProducts]= useState([])

    useEffect(() => {
      getProducts()
      .then((data)=>{
       setProducts(data)
      })
      .catch((error)=>{
       console.log(error) 
      })
      .finally(()=>{
       console.log("finalizo la promesa")
      })

      
    }, [])

    

    return (
      <div className="itemlistcontainer">
        {saludo}
        <ItemList productos={productos} />
      </div>
    
  )
}

export default ItemListContainer