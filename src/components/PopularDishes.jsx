import { useCart } from "../context/UseCart";
import MenuData from "../data/MenuData";
import "../styles/PopularDishes.css";
import { Link } from "react-router";


import paneerImage from "../assets/Grilled Paneer Tikka Platter with Green Chutney.png";
import burgerImage from "../assets/Classic Cheeseburger PNG Cutout.png";
import pizzaImage from "../assets/Margherita Pizza with Fresh Basil and Tomatoes.png";
import pastaImage from "../assets/Spicy Basil Penne Arrabbiata.png";
import cheesecakeImage from "../assets/Berry-Glazed Cheesecake Delight.png";


function PopularDishes() {

    const { addToCart } = useCart();

    // Only 6 dishes will appear on the Home page
    const popularDishIds = [5, 10, 13, 15, 17, 21];

    const popularDishes = MenuData.filter((dish) =>
        popularDishIds.includes(dish.id)
    );

    // Images for popular dishes
    const dishImages = {
    5: paneerImage,
    10: burgerImage,
    13: pizzaImage,
    15: pastaImage,
    17: cheesecakeImage,
    21: pizzaImage
};

    return (
        <section className="popularDishes">

            <h2>Popular Dishes</h2>

            <p className="popularSubtitle">
                A few of our favourites, prepared just for you.
            </p>

            <div className="dishContainer">

                {popularDishes.map((dish) => (
                    <div className="dishCard" key={dish.id}>

                        <div className="dishImage">
                            <img
                                src={dishImages[dish.id]}
                                alt={dish.name}
                            />
                        </div>

                        <div className="dishDetails">

                            <h3>{dish.name}</h3>

                            <p>{dish.description}</p>

                            <div className="dishBottom">

                                <span className="dishPrice">
                                    ${dish.price.toFixed(2)}
                                </span>

                                <button
                                    className="addToCartButton"
                                    onClick={() => addToCart(dish)}
                                >
                                    <i className="bi bi-bag-plus"></i>
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

            <div className="viewMenuButton">
                <Link to="/menu">Explore Full Menu</Link>
            </div>

        </section>
    );
}

export default PopularDishes;
