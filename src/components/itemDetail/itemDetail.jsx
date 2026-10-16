import { Item } from "../item/item"
import { ContextCart } from "../Cart/cartContext"
import { useContext } from "react"
import "./itemDetail.css"

export const ItemDetail = ({ item }) => {
    const { addCart } = useContext(ContextCart)
    return (
        <Item {...item} className="product-detail-card">
            <button className="detail-add-button" onClick={() => addCart(item)}>
                Agregar al carrito
            </button>
        </Item>
    )
}