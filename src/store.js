import productService from "./services/product-service"
import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cart-reducer";

const initialState = {
    // can move if db built
    cart: {
        cartItems: localStorage.getItem('cartItems')
                   ? JSON.parse(localStorage.getItem('cartItems'))
                   : []
    }
}

// const reducer = (state, action) => {
//     return {products: productService.findAllProducts}
// }
const reducer = combineReducers({
    cart: cartReducer

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store