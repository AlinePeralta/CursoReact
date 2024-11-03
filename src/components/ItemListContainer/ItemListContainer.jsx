
import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import "./ItemList.scss"

const ItemListContainer = ({saludo}) => {

    const [productos, setProducts]= useState([])
    const {idCategory} = useParams()


    useEffect(() => {
      getProducts()
      .then((data)=>{
        if (idCategory){
          const filterProductos =data.filter( (producto)=> producto.category === idCategory )
          setProducts(filterProductos)
        }else{
          setProducts(data)
        }
     
      })
      .catch((error)=>{
       console.log(error) 
      })
      .finally(()=>{
       console.log("finalizo la promesa")
      })

      
    }, [idCategory])

    

    return (
      <div className="itemlistcontainer">
        {saludo}
        <ItemList productos={productos} />
      </div>
    
  )
}

export default ItemListContainer