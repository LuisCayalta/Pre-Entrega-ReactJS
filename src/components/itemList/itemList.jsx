import "./itemList.css"
import { Link } from "react-router-dom"
import { Item } from "../item/item"
export const ItemList = ({prods}) => {
    if (!prods.length) {
        return <p>No hay productos que mostrar</p>
    }

    return (
        <div className="products-contain">
            {prods.map(prod => (
                <Link to = {`/products/${prod.id}`} key={prod.id} className="product-link">
                    <Item {...prod}/>
                </Link>
            ))}
        </div>
    )
}