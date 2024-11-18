import { useState, useEffect } from "react";
import {doc, getDoc} from "firebase/firestore";
import ItemDetail from "./ItemDetail.jsx";
import db from "../../db/db.js";
import { useParams } from "react-router-dom";
import "./Itemdetail.scss";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  
    const { idProducto } = useParams();

    const getProductsById = () => {
        const docRef = doc(db, "productos", idProducto);
        getDoc(docRef)
            .then((dataDb) => {
                const productDb = { id: dataDb.id, ...dataDb.data() };
                console.log(productDb); 
                setProducto(productDb);
            })
            .catch((error) => {
                console.error("Error al obtener el producto:", error);
                setError("Error al obtener el producto. Intenta de nuevo más tarde.");
            })
            .finally(() => {
                setLoading(false);
            });
    };
    

    useEffect(() => {
        if (!idProducto) return;
    
        setLoading(true);
        setError(null);
        getProductsById();
    }, [idProducto]);
    
    return (
        <div className="item-detail-container">
            {loading ? (
               <div className="loading-container">
               <div className="spinner"></div>
               <p>Cargando...</p>
           </div>
            ) : error ? (
                <div>{error}</div> 
            ) : producto ? (
                <ItemDetail producto={producto} />
            ) : (
                <div>No se encontró el producto</div>  
            )}
        </div>
    );
};

export default ItemDetailContainer;
