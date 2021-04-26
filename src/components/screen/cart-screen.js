import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addItem, deleteItem} from "../../actions/cart-actions";
import userService from "../../services/user-service";
import orderService from "../../services/order-service"

const CartScreen = (props) => {
    const [currentUser, setCurrentUser] = useState({})
    const [order, setOrder] = useState({orderItems: [], totalPrice: 0, user: ''})
    const {pid, uid} = useParams();
    const qty = props.location.search
                ? Number(props.location.search.split('=')[1])
                : 1;

    const history = useHistory()

    // extract the cart info from the Redux store state
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;
    console.log(cartItems)

    // get the state of login/out
    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
                console.log(currentUser)
            })
    },[])

    const subTotal = cartItems.filter(i => parseInt(i.price)).reduce((a, c) => a + c.price * c.qty, 0)

    const dispatch = useDispatch()

    useEffect(() => {
        setOrder({orderItems: cartItems, totalPrice: subTotal, user: uid})
        if(pid) {
            dispatch(addItem(pid, qty))
        }
    }, [dispatch, pid, qty])

    const checkoutHandler = () => {
        // if log in, should different
        if (Object.keys(currentUser).length === 0) {
            alert("Sorry. You should login/register first!")
            history.push("/login")
        } else {
            console.log(cartItems)
            console.log(currentUser._id)
            console.log(order)
            orderService.createOrder(order)
                .then(() => console.log(order))

            alert("Ordered successful!")
            history.push("/order")
        }

    }
    return(
        <div className="container-fluid row wbdv-row">
            <div className="col-10">
                <h1>Shopping Cart</h1>
                <ul>
                    {
                        cartItems.map(i => (
                            <li>
                                <div className="wbdv-row row">
                                    <div className="col-2">
                                        <img src={i.image_link} className="small"/>
                                    </div>
                                    <div className="col-2">
                                        <Link to={`/product/${i.product}`}>
                                            {i.name}
                                        </Link>
                                    </div>
                                    <div className="col-2">
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
                                    <div className="col-2">
                                        ${i.price}
                                    </div>
                                    <div className="col-2">
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
                                Subtotal <br/>
                                <h4>
                                ({cartItems.reduce((a, c) => parseInt(a) + parseInt(c.qty), 0)} items) :
                                </h4>

                                <h4 className="font-weight-bolder text-danger">
                                $
                                {
                                // cartItems.reduce((a, c) => parseInt(a) + parseInt(c.price) * parseInt(c.qty), 0)
                                //     cartItems.filter(i => parseInt(i.price)).reduce((a, c) => a + c.price * c.qty, 0)
                                    subTotal
                                }
                                </h4>
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