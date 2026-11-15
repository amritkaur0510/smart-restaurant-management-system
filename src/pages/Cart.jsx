import { Link } from "react-router";
import { useCart } from "../context/useCart";
import "../styles/Cart.css";

function Cart() {

    const {cartItems, updateQuantity,removeFromCart,subtotal } = useCart();

    // Calculate GST and final total
    const taxRate = 0.05;
    const taxAmount = Number((subtotal * taxRate).toFixed(2));
    const total = Number((subtotal + taxAmount).toFixed(2));

    // Calculate total quantity of items
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,0
    );

    return (
        <main className="cartPage">

            <section className="cartContainer">

                {/* Cart Heading */}
                <div className="cartHeading">
                    <span>YOUR ORDER</span>
                    <h1>Shopping Cart</h1>
                    <p>Review your selected dishes before checkout.</p>
                </div>


                {cartItems.length > 0 ? (

                    <div className="cartContent">

                        {/* Selected Items */}
                        <div className="cartItems">

                            {cartItems.map((item) => (

                                <div className="cartItem" key={item.id}>

                                    {/* Food Information */}
                                    <div className="cartItemDetails">

                                        <span className="cartItemCategory">
                                            {item.cuisine}
                                        </span>

                                        <h3>{item.name}</h3>

                                        <p>{item.description}</p>

                                        <span className="cartItemPrice">
                                            ${item.price.toFixed(2)}
                                        </span>

                                    </div>


                                    {/* Quantity Controls */}
                                    <div className="cartItemActions">

                                        <div className="quantityControl">

                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.id, -1)
                                                }
                                                aria-label={`Decrease ${item.name} quantity`}
                                            >
                                                <i className="bi bi-dash"></i>
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.id, 1)
                                                }
                                                aria-label={`Increase ${item.name} quantity`}
                                            >
                                                <i className="bi bi-plus"></i>
                                            </button>

                                        </div>

                                        <button
                                            className="removeItem"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            <i className="bi bi-trash3"></i>
                                            Remove
                                        </button>

                                    </div>


                                    {/* Item Total */}
                                    <div className="cartItemTotal">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* Order Summary */}
                        <div className="cartSummary">

                            <h2>Order Summary</h2>

                            <div className="summaryRow">
                                <span>Items ({cartCount})</span>
                                <span>{cartCount}</span>
                            </div>

                            <div className="summaryRow">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            <div className="summaryRow">
                                <span>GST (5%)</span>
                                <span>${taxAmount.toFixed(2)}</span>
                            </div>

                            <div className="summaryTotal">
                                <span>Total</span>
                                <strong>${total.toFixed(2)}</strong>
                            </div>

                            <p className="summaryNote">
                                Delivery charges, if applicable, will be
                                calculated at checkout.
                            </p>

                        </div>


                        {/* Cart Buttons */}
                        <div className="cartButtons">

                            <Link to="/menu" className="backToMenu">
                                <i className="bi bi-arrow-left"></i>
                                Continue Shopping
                            </Link>

                            <button
                                className="checkoutButton"
                                disabled
                                title="Checkout page will be added next"
                            >
                                Proceed to Checkout
                                <i className="bi bi-arrow-right"></i>
                            </button>

                        </div>

                    </div>

                ) : (

                    /* Empty Cart */
                    <div className="emptyCart">

                        <i className="bi bi-bag"></i>

                        <h2>Your cart is empty</h2>

                        <p>
                            You haven't added any dishes yet.
                            Explore our menu and find something delicious!
                        </p>

                        <Link to="/menu" className="backToMenu">
                            Explore Menu
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                )}

            </section>

        </main>
    )
}

export default Cart
