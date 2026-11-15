
import "../styles/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink, useLocation } from "react-router";

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <nav className={`myNavBar ${isHome ? "homeNavBar" : ""}`}>

            <div className="brand">
                <NavLink to="/">Birch - Beyond Ordinary</NavLink>
            </div>

            <div className="navLinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/reservation">Reservations</NavLink>
            </div>

            <div className="navIcons">
                <NavLink to="/cart" aria-label="Shopping cart">
                    <i className="bi bi-cart3"></i>
                </NavLink>

                <NavLink to="/login" aria-label="User profile">
                    <i className="bi bi-person-circle"></i>
                </NavLink>
            </div>

        </nav>
    );
}

export default Navbar;
