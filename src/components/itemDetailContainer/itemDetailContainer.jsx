import { ItemDetail } from "../itemDetail/itemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";

export const ItemDetailContain = () => {
    const { id } = useParams();

    const [itemDetail, setItemDetail] = useState(null);
    const [errorx, setErrorx] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        setLoad(true);
        setErrorx(null);
        setItemDetail(null);

        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("No se pudo cargar el catalogo");
                }
                return res.json();
            })
            .then((data) => {
                const item = data.find(
                    (prod) => String(prod.id) === id
                );

                if (!item) {
                    throw new Error(
                        "El producto no ha sido encontrado o ha sido removido"
                    );
                }

                setItemDetail(item);
            })
            .catch((error) => setErrorx(error.message))
            .finally(() => setLoad(false));
    }, [id]);

    if (load) {return <p className="detail-message">Cargando producto...</p>;}
    if (errorx) {return <p className="detail-message detail-error">{errorx}</p>;}
    if (!itemDetail) {return <p className="detail-message">Producto no encontrado.</p>;}

    return (
        <section className="detail-section">
            <p className="detail-eyebrow">MYWARETECH / PRODUCTOS</p>
            <h1 className="detail-page-title">Detalles del producto</h1>

            <div className="product-contain">
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    );
};