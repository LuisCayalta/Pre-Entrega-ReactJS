import "./header.css"
import { Nav } from "../Nav/nav"

export const Header = () => {
    return (
    <header className="site-header">
        <h2 className="site-logo">MywareStore</h2>
        <div className="navStyle">
            <Nav/>
        </div>
    </header>
    );
}