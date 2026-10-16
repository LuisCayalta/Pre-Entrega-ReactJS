import { useContext } from "react";
import { ContextCart } from "./cartContext";
import { Cart } from "./cart";
import "./cart.css";

export const CartContainer = () => {
    const { arcart, decrement, remove, addCart } = useContext(ContextCart);
    const total = arcart.reduce(
        (acc, item) => acc + Number(item.price) * item.quantity,0);

    return (
        <section className="cart-section">
            <p className="cart-eyebrow">MYWARETECH / COMPRA</p>
            <h1 className="cart-title">Tu carrito</h1>

            {arcart.length === 0 ? (
                <div className="cart-empty">
                    <h2>Tu carrito esta vacio</h2>
                    <p>Cuando agregues productos, apareceran aqui.</p>
                </div>
            ) : (
                <>
                <div className="cart-contain">
                    <ul className="cart-list">
                        {arcart.map((item) => (
                        <Cart key={item.id} {...item}>
                            <div className="cart-action">
                                <div className="quantity-control">
                                    <button
                                        className="quantity-button"
                                        onClick={() => decrement(item)}
                                        aria-label={`Quitar una unidad de ${item.name}`}>
                                            -
                                    </button>
                                    <span className="quantity-indicator">
                                        {item.quantity}
                                    </span>
                                    <button 
                                        className="quantity-button" 
                                        onClick={() => addCart(item)}
                                        aria-label={`Agregar una unidad de ${item.name}`}>
                                            +
                                    </button>
                                </div>

                                <button className="remove-button" onClick={() => remove(item)}>
                                    Eliminar
                                </button>
                            </div>
                        </Cart>
                        ))}
                    </ul>
                </div>

                <div className="cart-summary">
                    <span>Total de la compra</span>
                    <strong>
                        ${total.toLocaleString("es-AR")}
                    </strong>
                </div>
                </>
            )}
        </section>
    );
};
