import {createStore} from "redux";
import data from "../data"

const initialState = {};
// const reducer = combineReducers({
//
//
// })

const reducer = (state=initialState, action) => {
    return {products: data.products}
}

const store = createStore(reducer, initialState)

export default store