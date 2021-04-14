import productService from "../services/product-service"

export const ADD_ITEM = "ADD_ITEM";

export const addItem = (dispatch, pid, qty) => {
    const product = productService.findProductById(pid)
    dispatch({
        type: ADD_ITEM,
        payload: {
            name: product.name,
            image_link: product.image_link,
            price: product.price,
            product: product._id,
            qty,
        }
             })

}