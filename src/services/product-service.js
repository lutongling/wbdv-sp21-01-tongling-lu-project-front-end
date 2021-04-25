const PRODUCTS_URL = "http://localhost:7000/api/products"
const PRODUCTS_URL_DB = "http://localhost:7000/api/products_db"

// This is to implement the Search Component/Functionality and using a third-party open source API
const findProductByTitle =(title) =>
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${title}&product_type=lipstick`)
        .then(response => response.json())

// Since the API provider does not provide how to query product by its id
// I copy all the json file to my back end to retrieve findById functionality (details page)
const findProductById =(pid) =>
    fetch(`${PRODUCTS_URL}/${pid}`)
        .then(response => response.json())

const findAllProducts = () => {
    return fetch(PRODUCTS_URL)
        .then(response => response.json())
}

const findProductsBySellerId = (sid) => {
    return fetch(`${PRODUCTS_URL_DB}/user/${sid}`)
        .then(response => response.json())
        // .then(result => console.log(result))
}

const findAllProducts_DB =() => {
    return fetch(PRODUCTS_URL_DB)
        .then(response => response.json())
}

const createProduct = (product) => {
    fetch(`${PRODUCTS_URL_DB}`, {
        method: "POST",
        // credentials: "include",
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const deleteProduct = (product) =>
    fetch(`${PRODUCTS_URL_DB}`, {
        method: "DELETE",
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())



export default {
    findAllProducts,
    findProductByTitle,
    findProductById,
    findProductsBySellerId,
    findAllProducts_DB,
    createProduct,
    deleteProduct
}