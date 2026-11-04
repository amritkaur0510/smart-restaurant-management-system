import "../styles/Navbar.css"
import {Link} from "react-router"
function Navbar(){
    return(
        <>
        <div className="myNavBar">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/reservations">Reservation</Link>
            
        </div>
        </>
    )
}

export default Navbar