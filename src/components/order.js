import React, {useState} from 'react'
import orderService from '../services/order-service'

const Order = ({order, products, price}) => {
    console.log(products)
    const [editing, setEditing] = useState(false)
    const [newPrice, setNewPrice] = useState(price)

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <tr>
            <td>
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
                    orderService.deleteOrder(order)
                    refreshPage()
                    alert("deleted successfully!")
                }}
                                className="fas fa-2x fa-times text-danger float-right"></i>}
                { !editing && <i onClick={() => setEditing(true)}
                                 className="fas fa-2x fa-edit text-primary float-right"></i>}
                { editing && <i
                                className="fas fa-2x fa-check text-success wbdv-margin-right-10px float-right"></i> }
            </td>

        </tr>
    )
}

export default Order