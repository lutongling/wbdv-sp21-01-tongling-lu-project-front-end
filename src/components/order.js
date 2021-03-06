import React, {useState} from 'react'
import orderService from '../services/order-service'

const Order = ({order, products, price}) => {
    console.log(products)
    const [editing, setEditing] = useState(false)
    const [newPrice, setNewPrice] = useState(price)
    // const [updateOrder, setUpdateOrder] = useState(order)

    const refreshPage = () => {
        window.location.reload();
    }

    const savePrice = () => {
        setEditing(false)
        const newOrder = {
            ...order,
            totalPrice: newPrice
        }
        orderService.updateOrder(newOrder)
    }

    // const delete_handler = () => {
    //     orderService.deleteOrder(order)
    //         .then(() => setUpdateOrder(...updateOrder, ))
    // }

    return (
        <tr>
            <td>
                {/*{updateOrder._id}*/}
                {order._id}
            </td>
            <td>
                {products.map(p => <li>{p.name}</li>)}
            </td>
            {
                !editing &&
                <td>
                    {price}
                </td>
            }

            {
                editing &&
                <input
                    onChange={(event => setNewPrice(event.target.value))}
                    value={newPrice}
                    className="form-control d-inline"/>
            }

            <td>
                { editing && <i onClick={() => {
                    // delete_handler()
                    orderService.deleteOrder(order)
                    refreshPage()
                    alert("deleted successfully!")
                }}
                                className="fas fa-2x fa-times text-danger float-right"></i>}
                { !editing && <i onClick={() => setEditing(true)}
                                 className="fas fa-2x fa-edit text-primary float-right"></i>}
                { editing && <i onClick={() => {savePrice()
                                                refreshPage()
                                                alert("updated successfully!")}}
                                className="fas fa-2x fa-check text-success wbdv-margin-right-10px float-right"></i> }
            </td>

        </tr>
    )
}

export default Order