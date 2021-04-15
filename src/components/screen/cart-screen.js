import React, {useEffect} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addItem, deleteItem} from "../../actions/cart-actions";

const CartScreen = (props) => {
    const {pid} = useParams();
    const qty = props.location.search
                ? Number(props.location.search.split('=')[1])
                : 1;

    const history = useHistory()

    // extract the cart info from the Redux store state
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    console.log(cartItems)

    const dispatch = useDispatch()
    useEffect(() => {
        if(pid) {
            dispatch(addItem(pid, qty))
        }
    }, [dispatch, pid, qty])

    // const deleteItem = (pid) => {
    //     // delete Action
    // }

    const checkoutHandler = () => {
        // if sign in, should direct to shipping page
        history.push(`/signin?redirec=shipping`);
    }
    return(
        <div className="row wbdv-row">
            <div className="col-10">
                <h1>Shopping Cart</h1>
                <ul>
                    {
                        cartItems.map(i => (
                            <li>
                                <div className="wbdv-row row">
                                    <div>
                                        <img src={i.image_link} className="small"/>
                                    </div>
                                    <div>
                                        <Link to={`/product/${i.product}`}>
                                            {i.name}
                                        </Link>
                                    </div>
                                    <div>
                                        <select value={i.qty}
                                                onChange={e => dispatch(addItem(i.product, e.target.value))}>
                                            {
                                                [...Array(50).keys()].map(num => (
                                                    <option key={num+1} value={num+1}>
                                                        {num + 1}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        ${i.price}
                                    </div>
                                    <div>
                                        <button type="button"
                                                onClick={() => dispatch(deleteItem(i.product))}>
                                            Delete Item
                                        </button>
                                    </div>

                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-2">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => parseInt(a) + parseInt(c.qty), 0)} items) : $
                                {
                                // cartItems.reduce((a, c) => parseInt(a) + parseInt(c.price) * parseInt(c.qty), 0)
                                    cartItems.filter(i => parseInt(i.price)).reduce((a, c) => a + c.price * c.qty, 0)
                                }
                            </h2>
                        </li>
                        <li>
                            <button type="button"
                                    className="wbdv-primary-button block"
                                    disabled={cartItems.length === 0}
                                    onClick={checkoutHandler}>
                                Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CartScreen