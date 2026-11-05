import { useState } from "react";
import MenuData from "../data/MenuData";
import "../styles/PopularDishes.css";
import { Link } from "react-router";

function PopularDishes() {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredDishes = selectedCategory === "All"
        ? MenuData
        : MenuData.filter((dish) => dish.category === selectedCategory);

    return (
        <section className="popularDishes">

            <h2>Popular Dishes</h2>

            <div className="categoryButtons">
                <button onClick={() => setSelectedCategory("All")}>All</button>
                <button onClick={() => setSelectedCategory("Main Course")}>Main Course</button>
                <button onClick={() => setSelectedCategory("Appetizers")}>Appetizers</button>
                <button onClick={() => setSelectedCategory("Desserts")}>Desserts</button>
            </div>

            <div className="dishContainer">

                {filteredDishes.map((dish) => (
                    <div className="dishCard" key={dish.id}>

                        <h3>{dish.name}</h3>

                        <p>{dish.description}</p>

                        <span>${dish.price.toFixed(2)}</span>

                        <div className="viewMenuButton">
                            <Link to="/menu">View Full Menu</Link>
                        </div>
                    </div>

                ))}

            </div>

        </section>
    );
}

export default PopularDishes;