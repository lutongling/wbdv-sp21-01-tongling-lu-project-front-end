import React, {useEffect, useState} from 'react'
import orderService from "../../services/order-service";
import Order from "../order";

const OrderScreen = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        orderService.findAllOrders_DB()
            .then((o) => {
                setOrders(o)
            })
    }, [])

    return (
        <div className="container">
            <h1> Order Screen</h1>
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
    )
}

export default OrderScreen