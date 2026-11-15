import { useState } from "react";
import ordersData from "../data/OrderData";
import menuData from "../data/MenuData";
import { useCart } from "../context/useCart";
import "../styles/Order.css"


function Orders() {

    const [selectedTab, setSelectedTab] = useState("All Orders");
    const [sortOrder, setSortOrder] = useState("Newest");
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orderId, setOrderId] = useState("");
    const [trackedOrder, setTrackedOrder] = useState(null);
    const [trackMessage, setTrackMessage] = useState("");

    const { addToCart } = useCart();


    // Filter orders according to selected tab
    const filteredOrders = ordersData.filter((order) => {

        if (selectedTab === "Ongoing") {
            return ["Pending", "Preparing"].includes(order.status);
        }

        if (selectedTab === "Completed") {
            return order.status === "Delivered";
        }

        if (selectedTab === "Cancelled") {
            return order.status === "Cancelled";
        }

        return true;
    });


    // Sort orders by date
    const sortedOrders = [...filteredOrders].sort((a, b) => {

        if (sortOrder === "Newest") {
            return new Date(b.date) - new Date(a.date);
        }

        return new Date(a.date) - new Date(b.date);
    });


    // Calculate order summary
    const totalOrders = ordersData.length;

    const ongoingOrders = ordersData.filter(
        (order) => ["Pending", "Preparing"].includes(order.status)
    ).length;

    const completedOrders = ordersData.filter(
        (order) => order.status === "Delivered"
    ).length;

    const cancelledOrders = ordersData.filter(
        (order) => order.status === "Cancelled"
    ).length;


    // Format date and time
    function formatDate(date) {
        return new Date(date).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    }

    function formatTime(date) {
        return new Date(date).toLocaleTimeString("en-CA", {
            hour: "2-digit",
            minute: "2-digit"
        });
    }


    // Show or hide order details
    function handleViewDetails(orderId) {

        if (selectedOrder === orderId) {
            setSelectedOrder(null);
        } else {
            setSelectedOrder(orderId);
        }
    }


    // Add previous order items to cart
    function handleOrderAgain(order) {

        order.items.forEach((orderedItem) => {

            const dish = menuData.find(
                (menuItem) => menuItem.name === orderedItem.name
            );

            if (dish) {
                for (let i = 0; i < orderedItem.quantity; i++) {
                    addToCart(dish);
                }
            }

        });
    }


    // Search for an order
    function handleTrackOrder() {

        const foundOrder = ordersData.find(
            (order) => order.id.toLowerCase() === orderId.trim().toLowerCase()
        );

        if (foundOrder) {
            setTrackedOrder(foundOrder);
            setTrackMessage("");
        } else {
            setTrackedOrder(null);
            setTrackMessage("We couldn't find an order with that ID.");
        }
    }


    // Order status styling
    function getStatusClass(status) {
        return status.toLowerCase();
    }


    return (

        <main className="ordersPage">

            <div className="ordersLayout">

                {/* Main Orders Section */}
                <section className="ordersMain">

                    <div className="ordersHeading">
                        <span>YOUR ACCOUNT</span>
                        <h1>My Orders</h1>
                        <p>View and manage your previous orders.</p>
                    </div>


                    {/* Order Tabs */}
                    <div className="ordersToolbar">

                        <div className="orderTabs">

                            {["All Orders", "Ongoing", "Completed", "Cancelled"].map((tab) => (

                                <button
                                    key={tab}
                                    className={selectedTab === tab ? "activeTab" : ""}
                                    onClick={() => {
                                        setSelectedTab(tab);
                                        setSelectedOrder(null);
                                    }}
                                >
                                    {tab}
                                </button>

                            ))}

                        </div>


                        {/* Sort Orders */}
                        <div className="orderSort">

                            <label htmlFor="sortOrders">Sort by:</label>

                            <select
                                id="sortOrders"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                            </select>

                        </div>

                    </div>


                    {/* Order Cards */}
                    <div className="ordersList">

                        {sortedOrders.length > 0 ? (

                            sortedOrders.map((order) => (

                                <article className="orderCard" key={order.id}>

                                    <div className="orderCardContent">

                                        {/* Order Information */}
                                        <div className="orderInformation">

                                            <span className="orderNumber">
                                                ORDER #{order.id}
                                            </span>

                                            <div className="orderDate">
                                                <span>
                                                    <i className="bi bi-calendar3"></i>
                                                    {formatDate(order.date)}
                                                </span>

                                                <span>
                                                    <i className="bi bi-clock"></i>
                                                    {formatTime(order.date)}
                                                </span>
                                            </div>

                                        </div>


                                        {/* Ordered Dishes */}
                                        <div className="orderedDishes">

                                            {order.items.map((item, index) => (

                                                <div className="orderedDish" key={index}>
                                                    <span>{item.quantity} ×</span>
                                                    <span>{item.name}</span>
                                                </div>

                                            ))}

                                        </div>


                                        {/* Status Information */}
                                        <div className="orderStatusSection">

                                            <span className={`orderStatus ${getStatusClass(order.status)}`}>
                                                {order.status}
                                            </span>

                                            {order.status === "Delivered" && (
                                                <p>
                                                    Delivered on {formatDate(order.date)}
                                                </p>
                                            )}

                                            {order.estimatedDelivery && (
                                                <p>
                                                    Estimated delivery:
                                                    <br />
                                                    {formatDate(order.estimatedDelivery)}
                                                    {" at "}
                                                    {formatTime(order.estimatedDelivery)}
                                                </p>
                                            )}

                                            {order.status === "Cancelled" && (
                                                <p>Order cancelled</p>
                                            )}

                                            <p className="paymentStatus">
                                                Payment: {order.paymentStatus}
                                            </p>

                                        </div>


                                        {/* Order Price and Actions */}
                                        <div className="orderActions">

                                            <strong className="orderTotal">
                                                ${order.total.toFixed(2)}
                                            </strong>

                                            <button
                                                className="orderAgainButton"
                                                onClick={() => handleOrderAgain(order)}
                                            >
                                                Order Again
                                            </button>

                                            <button
                                                className="viewDetailsButton"
                                                onClick={() => handleViewDetails(order.id)}
                                            >
                                                {selectedOrder === order.id
                                                    ? "Hide Details"
                                                    : "View Details"
                                                }

                                                <i className={`bi ${selectedOrder === order.id
                                                    ? "bi-chevron-up"
                                                    : "bi-chevron-right"
                                                    }`}></i>
                                            </button>

                                        </div>

                                    </div>


                                    {/* Expanded Order Details */}
                                    {selectedOrder === order.id && (

                                        <div className="expandedOrderDetails">

                                            <h3>Order Details</h3>

                                            {order.items.map((item, index) => (

                                                <div className="detailItem" key={index}>
                                                    <span>
                                                        {item.name} × {item.quantity}
                                                    </span>

                                                    <span>
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                </div>

                                            ))}

                                            <div className="detailItem">
                                                <span>Subtotal</span>
                                                <span>${order.subtotal.toFixed(2)}</span>
                                            </div>

                                            <div className="detailItem">
                                                <span>GST (5%)</span>
                                                <span>${order.tax.toFixed(2)}</span>
                                            </div>

                                            <div className="detailTotal">
                                                <span>Total</span>
                                                <strong>${order.total.toFixed(2)}</strong>
                                            </div>

                                        </div>

                                    )}

                                </article>

                            ))

                        ) : (

                            <div className="noOrders">
                                <i className="bi bi-receipt"></i>
                                <h2>No orders found</h2>
                                <p>You don't have any orders in this category.</p>
                            </div>

                        )}

                    </div>

                </section>


                {/* Right Sidebar */}
                <aside className="ordersSidebar">


                    {/* Order Summary */}
                    <div className="sidebarCard orderSummaryCard">

                        <h2>Order Summary</h2>

                        <div className="summaryItem">
                            <i className="bi bi-receipt"></i>
                            <span>Total Orders</span>
                            <strong>{totalOrders}</strong>
                        </div>

                        <div className="summaryItem">
                            <i className="bi bi-arrow-repeat"></i>
                            <span>Ongoing Orders</span>
                            <strong>{ongoingOrders}</strong>
                        </div>

                        <div className="summaryItem">
                            <i className="bi bi-check-circle"></i>
                            <span>Completed Orders</span>
                            <strong>{completedOrders}</strong>
                        </div>

                        <div className="summaryItem">
                            <i className="bi bi-x-circle"></i>
                            <span>Cancelled Orders</span>
                            <strong>{cancelledOrders}</strong>
                        </div>

                    </div>


                    {/* Restaurant Message */}
                    <div className="sidebarCard restaurantMessage">

                        <div className="messageIcon">
                            <i className="bi bi-bag-heart"></i>
                        </div>

                        <div>
                            <h3>Good food, good moments.</h3>
                            <p>
                                Thank you for choosing us.
                                We appreciate your order!
                            </p>
                        </div>

                    </div>


                    {/* Track Order */}
                    <div className="sidebarCard trackOrderCard">

                        <h2>Track Your Order</h2>

                        <p>
                            Enter your order ID to check its current status.
                        </p>

                        <input
                            type="text"
                            placeholder="Enter Order ID"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />

                        <button onClick={handleTrackOrder}>
                            Track Order
                            <i className="bi bi-arrow-right"></i>
                        </button>

                        {trackMessage && (
                            <p className="trackError">{trackMessage}</p>
                        )}

                        {trackedOrder && (

                            <div className="trackedOrderResult">

                                <span>{trackedOrder.id}</span>

                                <strong className={`orderStatus ${getStatusClass(trackedOrder.status)}`}>
                                    {trackedOrder.status}
                                </strong>

                                {trackedOrder.estimatedDelivery && (
                                    <p>
                                        Estimated delivery:{" "}
                                        {formatTime(trackedOrder.estimatedDelivery)}
                                    </p>
                                )}

                            </div>

                        )}

                    </div>


                    {/* Help Section */}
                    <div className="sidebarCard helpCard">

                        <h2>Need Help?</h2>

                        <p>We're here to help you.</p>

                        <a href="mailto:support@example.com">
                            <i className="bi bi-headset"></i>
                            Contact Support
                        </a>

                    </div>

                </aside>

            </div>

        </main>

    );
}

export default Orders;
