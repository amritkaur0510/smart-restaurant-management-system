import "../styles/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="myNavBar">

            {/* Company Name */}
            <div className="brand">
                <NavLink to="/">Your Restaurant</NavLink>
            </div>

            {/* Navigation Links */}
            <div className="navLinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/reservations">Reservations</NavLink>
            </div>

            {/* Cart and Profile Icons */}
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