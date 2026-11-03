import {Link} from "react-router"
function Navbar(){
    return(
        <>
        <div className="myNavBar">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/addToCart">Cart</Link>
            <Link to="/reservations"></Link>
        </div>
        </>
    )
}

export default Navbar