const ORDER_API = "http://localhost:7000/api/orders";

const createOrder = (order) => {
    return fetch(`${ORDER_API}`, {
        method: "POST",
        // credentials: "include",
        body: JSON.stringify(order),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export default {
    createOrder
}