import React, { useState, useContext } from 'react';
import FormCheckout from './FormCheckout';
import { CartContext } from '../../context/CarritoContext';
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import db from '../../db/db.js';
import { Link } from 'react-router-dom';
import validateForm from '../../utils/validateForm.js';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png';

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

    const validationResponse = await validateForm(dataForm);
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

    toast.success('Pedido exitoso, consulta tu ID orden');
    await uploadOrder(order);
  };

  const uploadOrder = async (newOrder) => {
    const ordersRef = collection(db, 'orders');
    try {
      const response = await addDoc(ordersRef, newOrder);
      setIdOrder(response.id);
      await updateStock();
    } catch (error) {
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
      deleteCart(false); 
    } catch (error) {
      toast.error('Hubo un problema al actualizar el stock.');
    }
  };

  return (
    <div>
      {idOrder === null ? (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      ) : (
        <div className="container d-flex justify-content-center align-items-center min-vh-80">
          <div className="text-center">
            <img src={logo} alt="Logo Ualabis" className="img-fluid mb-4 logo-sm" />
            <h2>🎉 ¡Gracias por su compra! 😊</h2>
            <h4 className='mb-4'>Tu orden ha sido generada exitosamente.</h4>
            <p className="mb-5">Puedes rastrear tu compra con este número de orden: <strong className='text-uala acent'>{idOrder}</strong></p>
            <Link to="/" className="btn btn-uala">Volver al inicio</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
