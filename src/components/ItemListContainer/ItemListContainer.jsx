import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import './Itemlist.scss';

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    const getProducts = () => {
      
        const productsRef = collection(db, "productos");

        // Con o sin categoría
        const productsQuery = idCategory
            ? query(productsRef, where("category", "==", idCategory))
            : productsRef;

       
        getDocs(productsQuery)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => ({
                    id: productDb.id,
                    ...productDb.data(),
                }));

                setProductos(productsDb);
            })
            .catch((error) => {
                console.error("Error al obtener los productos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        setLoading(true);
        getProducts();
    }, [idCategory]);

    return (
        <div className="itemlistcontainer">
            {saludo && <h2>{saludo}</h2>}

            {loading ? (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Cargando...</p>
                </div>
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    );
};

export default ItemListContainer;
