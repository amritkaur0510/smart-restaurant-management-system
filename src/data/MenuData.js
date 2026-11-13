
const menuData = [
    // STARTERS & APPETIZERS
    {
        id: 1,
        name: "Crispy Spring Rolls",
        category: "Starters & Appetizers",
        cuisine: "Asian",
        price: 8.99,
        description: "Crispy rolls filled with fresh vegetables, served with sweet chilli sauce.",
        ingredients: ["Cabbage", "Carrots", "Bell Peppers", "Spring Roll Wrappers"],
        dietaryInfo: ["Vegetarian"],
        allergens: ["Wheat", "Soy"]
    },
    {
        id: 2,
        name: "Bruschetta",
        category: "Starters & Appetizers",
        cuisine: "Italian",
        price: 9.99,
        description: "Toasted bread topped with fresh tomatoes, basil, garlic and olive oil.",
        ingredients: ["Bread", "Tomatoes", "Basil", "Garlic", "Olive Oil"],
        dietaryInfo: ["Vegetarian"],
        allergens: ["Wheat"]
    },
    {
        id: 3,
        name: "Loaded Nachos",
        category: "Starters & Appetizers",
        cuisine: "Mexican",
        price: 11.99,
        description: "Tortilla chips topped with cheese, jalapeños, salsa and sour cream.",
        ingredients: ["Tortilla Chips", "Cheese", "Jalapeños", "Salsa", "Sour Cream"],
        dietaryInfo: ["Vegetarian", "Gluten-Free"],
        allergens: ["Milk"]
    },
    {
        id: 4,
        name: "Creamy Tomato Soup",
        category: "Starters & Appetizers",
        cuisine: "International",
        price: 7.99,
        description: "A warm tomato soup blended with herbs and a touch of cream.",
        ingredients: ["Tomatoes", "Cream", "Onion", "Garlic", "Herbs"],
        dietaryInfo: ["Vegetarian", "Gluten-Free"],
        allergens: ["Milk"]
    },

    // VEGETARIAN & VEGAN
    {
        id: 5,
        name: "Paneer Tikka",
        category: "Vegetarian & Vegan",
        cuisine: "Indian",
        price: 15.99,
        description: "Marinated paneer grilled with peppers and onions, served with mint chutney.",
        ingredients: ["Paneer", "Yogurt", "Bell Peppers", "Onions", "Indian Spices"],
        dietaryInfo: ["Vegetarian", "Gluten-Free", "High-Protein"],
        allergens: ["Milk"]
    },
    {
        id: 6,
        name: "Vegan Buddha Bowl",
        category: "Vegetarian & Vegan",
        cuisine: "International",
        price: 16.99,
        description: "A nourishing bowl with quinoa, roasted vegetables, chickpeas and tahini dressing.",
        ingredients: ["Quinoa", "Chickpeas", "Broccoli", "Sweet Potato", "Tahini"],
        dietaryInfo: ["Vegan", "Dairy-Free", "Gluten-Free"],
        allergens: ["Sesame"]
    },
    {
        id: 7,
        name: "Vegetable Stir-Fry",
        category: "Vegetarian & Vegan",
        cuisine: "Asian",
        price: 14.99,
        description: "Fresh seasonal vegetables tossed in a savoury garlic and soy sauce.",
        ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Mushrooms", "Soy Sauce"],
        dietaryInfo: ["Vegan", "Dairy-Free"],
        allergens: ["Soy", "Wheat"]
    },
    {
        id: 8,
        name: "Lentil Curry",
        category: "Vegetarian & Vegan",
        cuisine: "Indian",
        price: 15.49,
        description: "Slow-cooked lentils in a flavourful tomato and spice-based curry.",
        ingredients: ["Red Lentils", "Tomatoes", "Onions", "Garlic", "Indian Spices"],
        dietaryInfo: ["Vegan", "Dairy-Free", "Gluten-Free", "High-Protein"],
        allergens: []
    },

    // MAIN COURSE
    {
        id: 9,
        name: "Grilled Chicken Bowl",
        category: "Main Course",
        cuisine: "International",
        price: 18.99,
        description: "Grilled chicken served with rice, fresh vegetables and house dressing.",
        ingredients: ["Chicken", "Rice", "Broccoli", "Carrots", "House Dressing"],
        dietaryInfo: ["Gluten-Free", "High-Protein"],
        allergens: []
    },
    {
        id: 10,
        name: "Classic Beef Burger",
        category: "Main Course",
        cuisine: "American",
        price: 17.99,
        description: "Juicy beef patty with cheddar, lettuce, tomato and house sauce.",
        ingredients: ["Beef Patty", "Burger Bun", "Cheddar", "Lettuce", "Tomato"],
        dietaryInfo: ["High-Protein"],
        allergens: ["Wheat", "Milk", "Egg"]
    },
    {
        id: 11,
        name: "Grilled Salmon",
        category: "Main Course",
        cuisine: "International",
        price: 22.99,
        description: "Grilled salmon served with seasonal vegetables and lemon butter sauce.",
        ingredients: ["Salmon", "Broccoli", "Carrots", "Lemon", "Butter"],
        dietaryInfo: ["Gluten-Free", "High-Protein"],
        allergens: ["Fish", "Milk"]
    },
    {
        id: 12,
        name: "Chicken Tikka Masala",
        category: "Main Course",
        cuisine: "Indian",
        price: 19.99,
        description: "Tender chicken pieces cooked in a creamy tomato-based curry sauce.",
        ingredients: ["Chicken", "Tomatoes", "Cream", "Onions", "Indian Spices"],
        dietaryInfo: ["Gluten-Free", "High-Protein"],
        allergens: ["Milk"]
    },

    // PASTA & PIZZA
    {
        id: 13,
        name: "Margherita Pizza",
        category: "Pasta & Pizza",
        cuisine: "Italian",
        price: 16.99,
        description: "Classic pizza topped with tomato sauce, mozzarella and fresh basil.",
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil"],
        dietaryInfo: ["Vegetarian"],
        allergens: ["Wheat", "Milk"]
    },
    {
        id: 14,
        name: "Creamy Alfredo Pasta",
        category: "Pasta & Pizza",
        cuisine: "Italian",
        price: 17.99,
        description: "Fettuccine pasta tossed in a rich and creamy parmesan sauce.",
        ingredients: ["Fettuccine", "Cream", "Parmesan", "Garlic", "Butter"],
        dietaryInfo: ["Vegetarian"],
        allergens: ["Wheat", "Milk"]
    },
    {
        id: 15,
        name: "Spicy Arrabbiata Pasta",
        category: "Pasta & Pizza",
        cuisine: "Italian",
        price: 16.49,
        description: "Pasta tossed in a spicy tomato sauce with garlic and fresh herbs.",
        ingredients: ["Pasta", "Tomatoes", "Garlic", "Chilli Flakes", "Basil"],
        dietaryInfo: ["Vegan", "Dairy-Free"],
        allergens: ["Wheat"]
    },
    {
        id: 16,
        name: "Chicken Pesto Pasta",
        category: "Pasta & Pizza",
        cuisine: "Italian",
        price: 19.49,
        description: "Grilled chicken and pasta tossed in a fresh basil pesto sauce.",
        ingredients: ["Chicken", "Pasta", "Basil Pesto", "Parmesan", "Olive Oil"],
        dietaryInfo: ["High-Protein"],
        allergens: ["Wheat", "Milk", "Tree Nuts"]
    },

    // DESSERTS
    {
        id: 17,
        name: "Classic Cheesecake",
        category: "Desserts",
        cuisine: "American",
        price: 8.99,
        description: "Creamy cheesecake with a buttery biscuit base.",
        ingredients: ["Cream Cheese", "Sugar", "Eggs", "Biscuit Base"],
        dietaryInfo: ["Vegetarian"],
        allergens: ["Milk", "Egg", "Wheat"]
    },
    {
        id: 18,
        name: "Chocolate Brownie",
        category: "Desserts",
        cuisine: "American",
        price: 7.99,
        description: "Rich chocolate brownie with a soft centre.",
        ingredients: ["Chocolate", "Flour", "Butter", "Sugar", "Eggs"],
        dietaryInfo: ["Vegetarian"],
        allergens: ["Wheat", "Milk", "Egg"]
    },
    {
        id: 19,
        name: "Mango Sorbet",
        category: "Desserts",
        cuisine: "International",
        price: 6.99,
        description: "Refreshing frozen mango dessert made without dairy.",
        ingredients: ["Mango", "Sugar", "Lemon Juice"],
        dietaryInfo: ["Vegan", "Dairy-Free", "Gluten-Free"],
        allergens: []
    },
    {
        id: 20,
        name: "Gulab Jamun",
        category: "Desserts",
        cuisine: "Indian",
        price: 7.49,
        description: "Soft milk-based dumplings soaked in fragrant sugar syrup.",
        ingredients: ["Milk Solids", "Flour", "Sugar", "Cardamom"],
        dietaryInfo: ["Vegetarian"],
        allergens: ["Milk", "Wheat"]
    },

    // DRINKS
    {
        id: 21,
        name: "Fresh Mango Smoothie",
        category: "Drinks",
        cuisine: "International",
        price: 6.99,
        description: "A refreshing smoothie blended with ripe mango and yogurt.",
        ingredients: ["Mango", "Yogurt", "Milk"],
        dietaryInfo: ["Vegetarian", "Gluten-Free"],
        allergens: ["Milk"]
    },
    {
        id: 22,
        name: "Iced Coffee",
        category: "Drinks",
        cuisine: "International",
        price: 5.49,
        description: "Freshly brewed coffee served chilled over ice with milk.",
        ingredients: ["Coffee", "Milk", "Ice"],
        dietaryInfo: ["Vegetarian", "Gluten-Free"],
        allergens: ["Milk"]
    },
    {
        id: 23,
        name: "Fresh Orange Juice",
        category: "Drinks",
        cuisine: "International",
        price: 4.99,
        description: "Freshly squeezed orange juice with no added sugar.",
        ingredients: ["Oranges"],
        dietaryInfo: ["Vegan", "Dairy-Free", "Gluten-Free"],
        allergens: []
    },
    {
        id: 24,
        name: "Masala Chai",
        category: "Drinks",
        cuisine: "Indian",
        price: 4.49,
        description: "Traditional Indian tea brewed with milk and aromatic spices.",
        ingredients: ["Black Tea", "Milk", "Cardamom", "Ginger", "Cinnamon"],
        dietaryInfo: ["Vegetarian", "Gluten-Free"],
        allergens: ["Milk"]
    }
];

export default menuData;
