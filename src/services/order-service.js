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

// const findOrderByUserId = (uid) => {
//     return fetch(`${ORDER_API}/${uid}`)
//         .then(response => response.json())
//         .then(result => console.log(result))
// }

export default {
    createOrder,
    // findOrderByUserId
}