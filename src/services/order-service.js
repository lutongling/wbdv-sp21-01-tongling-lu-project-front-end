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

const findAllOrders_DB =() => {
    return fetch(ORDER_API)
        .then(response => response.json())
}

const deleteOrder = (order) =>
    fetch(`${ORDER_API}`, {
        method: "DELETE",
        body: JSON.stringify(order),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateOrder = (order) => {
    return fetch(`${ORDER_API}`, {
        method: "PUT",
        body: JSON.stringify(order),
        headers: {
            'content-type': 'application/json',
            // 'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => console.log(result))
}

export default {
    createOrder,
    deleteOrder,
    updateOrder,
    findAllOrders_DB
}