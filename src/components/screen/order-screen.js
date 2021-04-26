import React, {useEffect, useState} from 'react'
import orderService from "../../services/order-service";
import Order from "../order";
import {useHistory} from "react-router-dom";

const OrderScreen = () => {
    const [orders, setOrders] = useState([]);
    const history = useHistory()

    useEffect(() => {
        orderService.findAllOrders_DB()
            .then((o) => {
                setOrders(o)
            })
    }, [])

    return (
        <div>
            <button className="fas fa-2x fa-arrow-left"
                    onClick={history.goBack}>
            </button>
        <div className="container">
            <h1 className="font-weight-bolder">Your Orders</h1>
            <br/>
            <table className="table">
                <thead>
                <tr>
                    <th>Order Id</th>
                    <th className="d-none d-sm-table-cell">Products</th>
                    <th className="d-none d-lg-table-cell">Total Price</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => {
                            return(
                                <Order key={order._id}
                                       products={order.orderItems}
                                       price={order.totalPrice}
                                       order={order}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default OrderScreen