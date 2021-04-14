import {ADD_ITEM} from "../actions/cart-actions";

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
        default:
            return state
    }
}

export default cartReducer