import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify'; 

const CartContext = createContext();

const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : []; 
    });

    // Guardar el carrito en localStorage 
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]); 

    const addProductInCart = (newProduct) => {
        const condicion = isInCart(newProduct.id);
        if (condicion) {
            // ➕ Sumar la cantidad
            const tempCart = [...cart];
            const findIndex = tempCart.findIndex((productoCarrito) => productoCarrito.id === newProduct.id);
            tempCart[findIndex].cantidad += newProduct.cantidad; 
            setCart(tempCart); 
            toast.success(`${newProduct.nombre} se ha actualizado en tu carrito.`); 
        } else {
            setCart([ ...cart, newProduct]); 
            toast.success(`${newProduct.nombre} ha sido agregado a tu carrito.`); 
        }
    };

    // 🛒 Cantidad de la compra
    const totalCantidad = () => {
        return cart.reduce((totalacc, productoCarrito) => totalacc + productoCarrito.cantidad, 0);
    };

    // 💲 Precio total de la compra
    const totalPrice = () => {
        return cart.reduce((total, productoCarrito) => total + (productoCarrito.precio * productoCarrito.cantidad), 0);
    };

    // 🆗 Verifica si el producto ya está en el carrito
    const isInCart = (idProduct) => {
        return cart.some((productoCarrito) => productoCarrito.id === idProduct); 
    };

    // ✖️ Eliminar producto por id
    const deleteProductById = (idProduct) => {
        const productToDelete = cart.find((productoCarrito) => productoCarrito.id === idProduct);

        if (productToDelete) {
            const filterProducts = cart.filter((productoCarrito) => productoCarrito.id !== idProduct);
            setCart(filterProducts);
            toast.error(`${productToDelete.nombre} fue eliminado del carrito.`);
        }
    };

    // ✖️🛒 Eliminar todo el carrito
    const deleteCart = (showAlert = true) => {
        setCart([]);
        if (showAlert) {
            toast.error("Todo el carrito fue eliminado.");
        }
    };

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalCantidad, totalPrice, deleteProductById, deleteCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
