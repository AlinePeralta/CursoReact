import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CarritoContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [idOrder, setIdOrder] = useState(null)

    const {cart, totalPrice, deleteCart} = useContext(CartContext)

    const handleChangeInput = (event) =>{
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = async(event) => {
        event.preventDefault()

        const order = {
          buyer: {...dataForm},
          products: [...cart ],
          date: Timestamp.fromDate(new Date()),
          total: totalPrice()
          
        }

        try {
          const response = await validateForm(dataForm)
          if (response.status === "error" ) throw new Error(response.message)
            toast.success("Generando orden...")
            uploadOrder( order )
        
        } catch (error){
          toast.error(error.message)
        }


    }

    const uploadOrder = (newOrder) => {
      const ordersRef = collection(db, "orders")
      addDoc(ordersRef, newOrder)
        .then((response) => setIdOrder(response.id) )
        .catch((error)=> console.log(error))
        .finally(()=>{
          updateStock()
        })
    }


const updateStock =() => {
  cart.map(({id, quantity, ...dataProduct}) => {
    const productsRef = doc(db, "productos", id)
    setDoc(productsRef, {...dataProduct, stock: dataProduct.stock - quantity})
  })

  //Cuando termine la actualizacion de stock borra el carrito
deleteCart()

}

  return (
    <div className="card ">

    {
      idOrder === null ? (
        <FormCheckout 
        dataForm={dataForm} 
        handleChangeInput={handleChangeInput} 
        handleSubmitForm={handleSubmitForm}/>

      ) : (
        <div>
          <h2>Gracias por su compra 😊</h2>
          <p>Sigue el estado de tu pedido: {idOrder} </p>
          <Link to="/">Volver al inicio</Link>
        </div>
      )
    }


   
    </div>
  )
}

export default Checkout
