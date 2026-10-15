import { useEffect, useState } from "react"
import { ItemList } from "../itemList/itemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/products.json")
        .then((res) => {
            if(!res.ok) {
                throw new Error("Error al cargar los productos")
            };
            return res.json();
        })
        .then(data => setProducts(data))
        .catch(error => setErrors(error.message))
        .finally(() => setLoading(false));
    }, []);

    if(loading) return <p>Cargando productos...</p>
    if (errors) return <p>{errors}</p>

    return (
        <section>
            <h1>Catalogo</h1>
            <ItemList prods = {products}/>
        </section>
    )
}