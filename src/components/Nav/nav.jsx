import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextCart } from "../Cart/cartContext";
import "./Nav.css";

export const Nav = () => {
    const { arcart } = useContext(ContextCart);
    const totalProducts = arcart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="main-nav" aria-label="Navegación principal">
            <ul className="nav-list">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/cart">Carrito <span aria-hidden="true">🛒</span>
                        {totalProducts > 0 && (
                            <span className="cart-counter">
                                {totalProducts}
                            </span>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
