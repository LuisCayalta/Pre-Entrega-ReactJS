import { Link } from "react-router-dom"
import { Item } from "../item/item"
export const ItemList = ({prods}) => {
    if (!prods.length()) {
        return <p>No hay productos que mostrar</p>
    }

    return (
        <div className="products-contain">
            {prods.map(prod => (
                <Link to = {`/product/${prod.id}`} key={prod.id}>
                    <Item {...prod}/>
                </Link>
            ))}
        </div>
    )
}