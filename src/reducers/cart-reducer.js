/* Redux part reference: I applied the ideas and code from a course on Udemy I've taken:
   Build Ecommerce Website Like Amazon
   github link: https://github.com/basir/amazona
 */

import {ADD_ITEM, DELETE_ITEM} from "../actions/cart-actions";

const initialState = {
    cartItems: []
};

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(i => i.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === existItem.product ? item : i)
                }
            } else {
                return {...state, cartItems: [...state.cartItems, item]}
            }
        case DELETE_ITEM:
            const newState = {
                cartItems: state.cartItems.filter(i => {
                    if(i.product === action.payload) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState
        default:
            return state
    }
}

export default cartReducer