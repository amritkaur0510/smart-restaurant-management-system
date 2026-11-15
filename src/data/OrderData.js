
const ordersData = [
    {
        id: "ORD-1001",
        date: "2026-11-12T18:30:00",
        status: "Delivered",
        paymentStatus: "Paid",
        items: [
            {
                name: "Chicken Tikka Masala",
                quantity: 1,
                price: 19.99
            },
            {
                name: "Masala Chai",
                quantity: 2,
                price: 4.49
            }
        ],
        subtotal: 28.97,
        tax: 1.45,
        total: 30.42
    },
    {
        id: "ORD-1002",
        date: "2026-11-13T17:45:00",
        status: "Preparing",
        paymentStatus: "Paid",
        estimatedDelivery: "2026-11-13T19:00:00",
        items: [
            {
                name: "Grilled Chicken Bowl",
                quantity: 1,
                price: 18.99
            },
            {
                name: "Fresh Orange Juice",
                quantity: 1,
                price: 4.99
            }
        ],
        subtotal: 23.98,
        tax: 1.20,
        total: 25.18
    },
    {
        id: "ORD-1003",
        date: "2026-11-10T13:15:00",
        status: "Delivered",
        paymentStatus: "Paid",
        items: [
            {
                name: "Margherita Pizza",
                quantity: 1,
                price: 16.99
            },
            {
                name: "Mango Sorbet",
                quantity: 1,
                price: 6.99
            }
        ],
        subtotal: 23.98,
        tax: 1.20,
        total: 25.18
    },
    {
        id: "ORD-1004",
        date: "2026-11-09T12:00:00",
        status: "Cancelled",
        paymentStatus: "Refunded",
        items: [
            {
                name: "Classic Beef Burger",
                quantity: 1,
                price: 17.99
            }
        ],
        subtotal: 17.99,
        tax: 0.90,
        total: 18.89
    },
    {
        id: "ORD-1005",
        date: "2026-11-13T19:00:00",
        status: "Pending",
        paymentStatus: "Paid",
        estimatedDelivery: "2026-11-13T20:00:00",
        items: [
            {
                name: "Paneer Tikka",
                quantity: 1,
                price: 15.99
            },
            {
                name: "Fresh Mango Smoothie",
                quantity: 1,
                price: 6.99
            }
        ],
        subtotal: 22.98,
        tax: 1.15,
        total: 24.13
    }
];

export default ordersData;
