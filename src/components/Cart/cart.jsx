
export const Cart = ({ id, name, price, quantity, children }) => {
    const subtotal = price * quantity;

    return (
        <li className="cart-item">
            <div className="cart-product-info">
                <span className="cart-product-id">#{id}</span>
                <h3 className="cart-product-name">{name}</h3>
                <p className="cart-unit-price">
                    ${Number(price).toLocaleString("es-AR")} por unidad
                </p>
            </div>

            <div className="cart-product-subtotal">
                <span>Subtotal</span>
                <strong>
                    ${Number(subtotal).toLocaleString("es-AR")}
                </strong>
            </div>

            {children}
        </li>
    );
};