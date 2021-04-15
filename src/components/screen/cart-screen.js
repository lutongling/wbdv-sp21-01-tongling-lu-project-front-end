import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem} from "../../actions/cart-actions";

const CartScreen = (props) => {
    const {pid} = useParams();
    const qty = props.location.search
                ? Number(props.location.search.split('=')[1])
                : 1;

    const dispatch = useDispatch()
    useEffect(() => {
        if(pid) {
            dispatch(addItem(pid, qty))
        }
    }, [dispatch, pid, qty])
    return(
        <div>
            <h1>Cart Screen</h1>
            <p>
                ADD TO CART : ProductID: {pid} Qty: {qty}
            </p>
        </div>
    )
}

export default CartScreen