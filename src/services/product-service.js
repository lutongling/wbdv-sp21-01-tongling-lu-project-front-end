const PRODUCTS_URL = "http://localhost:7000/api/products"

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

export default {
    findAllProducts,
    findProductByTitle,
    findProductById
}