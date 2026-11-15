import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    // Add a dish to the cart
    function addToCart(dish) {
        setCartItems((previousItems) => {

            const existingItem = previousItems.find(
                (item) => item.id === dish.id
            );

            if (existingItem) {
                return previousItems.map((item) =>
                    item.id === dish.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...previousItems, { ...dish, quantity: 1 }];
        });
    }

    // Update item quantity
    function updateQuantity(id, amount) {
        setCartItems((previousItems) =>
            previousItems
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + amount }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    // Remove an item
    function removeFromCart(id) {
        setCartItems((previousItems) =>
            previousItems.filter((item) => item.id !== id)
        );
    }

    // Count total items
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                updateQuantity,
                removeFromCart,
                cartCount,
                subtotal
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
