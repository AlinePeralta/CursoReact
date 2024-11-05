import { useState, useEffect } from "react";
import { getProducts } from "../../data/data.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import "./Itemdetail.scss";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProducto } = useParams();

    useEffect(() => {
        setLoading(true);

        getProducts()
            .then((data) => {
                const findProduct = data.find((producto) => producto.id === parseInt(idProducto));
                setProducto(findProduct);
            })
            .finally(() => setLoading(false));
    }, [idProducto]);

    return (
        <>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <ItemDetail producto={producto} />
            )}
        </>
    );
};

export default ItemDetailContainer;
