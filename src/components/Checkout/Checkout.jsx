import React, { useState, useContext } from 'react';
import FormCheckout from './FormCheckout';
import { CartContext } from '../../context/CarritoContext';
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import db from '../../db/db.js';
import { Link } from 'react-router-dom';
import validateForm from '../../utils/validateForm.js';
import { toast } from 'react-toastify';

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });

  const [idOrder, setIdOrder] = useState(null);

  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    
    const validationResponse = validateForm(dataForm);
    if (validationResponse.status === 'error') {
      toast.error(validationResponse.message);
      return;
    }

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice()
    };

    try {
      toast.success('Generando orden...');
      uploadOrder(order);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const uploadOrder = async (newOrder) => {
    const ordersRef = collection(db, 'orders');
    try {
      const response = await addDoc(ordersRef, newOrder);
      setIdOrder(response.id);
      updateStock();
      toast.success('Pedido generado correctamente');
    } catch (error) {
      console.error(error);
      toast.error('Hubo un error al generar la orden');
    }
  };

  const updateStock = async () => {
    const stockUpdates = cart.map(({ id, quantity, ...dataProduct }) => {
      const productsRef = doc(db, 'productos', id);
      return setDoc(productsRef, { ...dataProduct, stock: dataProduct.stock - quantity });
    });

    try {
      await Promise.all(stockUpdates); 
      deleteCart();  
    } catch (error) {
      console.error('Error al actualizar el stock:', error);
      toast.error('Hubo un problema al actualizar el stock.');
    }
  };

  return (
    <div className="card">
      {idOrder === null ? (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      ) : (
        <div>
          <h2>Gracias por su compra 😊</h2>
          <p>Sigue el estado de tu pedido: {idOrder}</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
