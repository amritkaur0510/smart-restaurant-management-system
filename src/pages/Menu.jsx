import { useState } from "react";
import menuData from "../data/MenuData";

import { useCart } from "../context/UseCart";
import "../styles/Menu.css";

function Menu() {

    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedDiet, setSelectedDiet] = useState("All");

    const { addToCart, cartCount } = useCart();

    const categories = [
        "All",
        "Starters & Appetizers",
        "Vegetarian & Vegan",
        "Main Course",
        "Pasta & Pizza",
        "Desserts",
        "Drinks"
    ];

    const dietaryOptions = [
        "All",
        "Vegetarian",
        "Vegan",
        "Gluten-Free",
        "Dairy-Free",
        "High-Protein"
    ];

    // Filter dishes
    const filteredDishes = menuData.filter((dish) => {

        const matchesSearch = dish.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            dish.category === selectedCategory;

        const matchesDiet =
            selectedDiet === "All" ||
            dish.dietaryInfo.includes(selectedDiet);

        return matchesSearch && matchesCategory && matchesDiet;
    });

    // Group filtered dishes by category
    const groupedDishes = categories
        .filter((category) => category !== "All")
        .map((category) => ({
            category,
            dishes: filteredDishes.filter(
                (dish) => dish.category === category
            )
        }))
        .filter((group) => group.dishes.length > 0);

    function handleSearch() {
        setSearchTerm(search.trim());
    }

    function clearFilters() {
        setSearch("");
        setSearchTerm("");
        setSelectedCategory("All");
        setSelectedDiet("All");
    }

    return (
        <main className="menuPage">

            {/* Page Heading */}
            <section className="menuHeading">

                <span className="menuSubtitle">
                    GOOD FOOD, GREAT MOMENTS
                </span>

                <h1>Explore Our Menu</h1>

                <p>
                    From comforting classics to international favourites,
                    discover something delicious for every taste.
                </p>

            </section>


            <section className="menuContent">

                {/* Search Bar */}
                <div className="menuSearch">

                    <input
                        type="text"
                        placeholder="Search for your favourite dish..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />

                    <button onClick={handleSearch}>
                        <i className="bi bi-search"></i>
                        Search
                    </button>

                </div>


                {/* Category Filters */}
                <div className="filterSection">

                    <h3>Categories</h3>

                    <div className="filterButtons">

                        {categories.map((category) => (
                            <button
                                key={category}
                                className={
                                    selectedCategory === category
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}

                    </div>

                </div>


                {/* Dietary Filters */}
                <div className="filterSection">

                    <h3>Dietary Preferences</h3>

                    <div className="filterButtons dietaryButtons">

                        {dietaryOptions.map((option) => (
                            <button
                                key={option}
                                className={
                                    selectedDiet === option
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setSelectedDiet(option)}
                            >
                                {option}
                            </button>
                        ))}

                    </div>

                </div>


                {/* Results Heading */}
                <div className="menuResultsHeading">

                    <div>
                        <h2>Our Menu</h2>
                        <p>{filteredDishes.length} dishes found</p>
                    </div>

                    <button
                        className="clearFilters"
                        onClick={clearFilters}
                    >
                        <i className="bi bi-arrow-counterclockwise"></i>
                        Clear Filters
                    </button>

                </div>


                {/* Menu List */}
                <div className="menuDishContainer">

                    {groupedDishes.length > 0 ? (

                        groupedDishes.map((group) => (

                            <section
                                className="menuCategoryGroup"
                                key={group.category}
                            >

                                <div className="menuCategoryHeading">

                                    <span>OUR SELECTION</span>

                                    <h2>{group.category}</h2>

                                    <div className="categoryLine"></div>

                                </div>


                                <div className="menuDishList">

                                    {group.dishes.map((dish, index) => (

                                        <article
                                            className="menuDishCard"
                                            key={dish.id}
                                        >

                                            {/* Dish Number */}
                                            <div className="dishNumber">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>


                                            {/* Dish Information */}
                                            <div className="dishDetails">

                                                <div className="dishTitleRow">

                                                    <h3>{dish.name}</h3>

                                                    <span className="dishCuisine">
                                                        {dish.cuisine}
                                                    </span>

                                                </div>

                                                <p className="dishDescription">
                                                    {dish.description}
                                                </p>


                                                {/* Dietary Labels */}
                                                {dish.dietaryInfo.length > 0 && (
                                                    <div className="dishDietary">

                                                        {dish.dietaryInfo.map((option) => (
                                                            <span key={option}>
                                                                {option}
                                                            </span>
                                                        ))}

                                                    </div>
                                                )}


                                                {/* Ingredients and Allergens */}
                                                <div className="dishExtraInfo">

                                                    <p>
                                                        <strong>Ingredients:</strong>{" "}
                                                        {dish.ingredients.join(", ")}
                                                    </p>

                                                    <p>
                                                        <strong>Allergens:</strong>{" "}
                                                        {dish.allergens.length > 0
                                                            ? dish.allergens.join(", ")
                                                            : "None listed"}
                                                    </p>

                                                </div>

                                            </div>


                                            {/* Price and Add to Cart */}
                                            <div className="dishCardBottom">

                                                <span className="dishPrice">
                                                    ${dish.price.toFixed(2)}
                                                </span>

                                                <button
                                                    onClick={() => addToCart(dish)}
                                                >
                                                    <i className="bi bi-plus-lg"></i>
                                                    Add
                                                </button>

                                            </div>

                                        </article>

                                    ))}

                                </div>

                            </section>

                        ))

                    ) : (

                        <div className="noDishes">

                            <i className="bi bi-search"></i>

                            <h3>No dishes found</h3>

                            <p>
                                Try another search or change your filters.
                            </p>

                            <button onClick={clearFilters}>
                                Show All Dishes
                            </button>

                        </div>

                    )}

                </div>


                {/* Cart Information */}
                <div className="menuCartInfo">

                    <i className="bi bi-bag"></i>

                    <span>
                        Items in cart: <strong>{cartCount}</strong>
                    </span>

                </div>

            </section>

        </main>
    );
}

export default Menu;
