import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (newProduct) => {
        const condicion = isInCart(newProduct.id);
        if (condicion) {
            // ➕ Sumar la cantidad
            const tempCart = [...cart];
            const findIndex = tempCart.findIndex((productoCarrito) => productoCarrito.id === newProduct.id);
            tempCart[findIndex].cantidad += newProduct.cantidad; 
            setCart(tempCart); 
        } else {
            setCart([ ...cart, newProduct]); 
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
        const filterProducts = cart.filter((productoCarrito) => productoCarrito.id !== idProduct);
        setCart(filterProducts);
    };

    // ✖️🛒 Eliminar todo el carrito
    const deleteCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalCantidad, totalPrice, deleteProductById, deleteCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
