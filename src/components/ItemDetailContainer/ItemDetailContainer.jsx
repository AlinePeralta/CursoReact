import { useState, useEffect } from "react";
import { getProducts } from "../../data/data.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import "./Itemdetail.scss";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {idProducto } = useParams()

    useEffect(() => {
        getProducts()
            .then((data) => {
                const findProduct = data.find((producto) => producto.id === parseInt(idProducto) );
                setProducto(findProduct);
            });
    }, [idProducto]);

    return (
       <ItemDetail producto={producto}/>
    );
};

export default ItemDetailContainer;
