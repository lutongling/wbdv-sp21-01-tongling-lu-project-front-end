import React, {useState} from 'react'
import Rating from "./rating";
import {Link} from "react-router-dom";
import productService from "../services/product-service";

const Product = ({product, is_managed}) => {
    const [editing, setEditing] = useState(false)
    const [newProduct, setNewProduct] = useState({product})

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <br/>
            <br/>
            <div key={product.id} className="card">
                {
                    is_managed && !editing &&
                    <i onClick={() => setEditing(true)}
                       className="fas fa-2x fa-edit text-primary float-right text-black-50"></i>
                }
                {
                    is_managed && editing &&
                    <span>
                    <i onClick={() => {
                        productService.updateProduct(newProduct)
                            .then(() => {
                                setNewProduct(newProduct)
                            })
                        refreshPage()
                        alert("updated successfully!")
                    }}
                       className="fas fa-2x fa-check text-success float-right"></i>

                    <i onClick={() => {
                        console.log(product)
                        productService.deleteProduct(product)
                        refreshPage()
                        alert("deleted successfully!")
                    }}
                       className="fas fa-2x fa-times text-danger float-right"></i>
                    </span>
                }

                {
                    is_managed && editing &&
                    <h6>Name</h6>
                }
                {
                    is_managed && editing &&
                    <input className="wbdv-sm-input"
                           onChange={(e) => setNewProduct({...product, name: e.target.value})}/>
                }

                <br/>

                {
                    is_managed && editing &&
                    <h6>Rating</h6>
                }
                {
                    is_managed && editing &&
                    <input className="wbdv-sm-input"
                           onChange={(e) => setNewProduct({...product, rating: e.target.value})}/>
                }

                <br/>

                {
                    is_managed && editing &&
                    <h6>Price</h6>
                }
                {
                    is_managed && editing &&
                    <input className="wbdv-sm-input"
                           onChange={(e) => setNewProduct({...product, price: e.target.value})}/>
                }

                <Link to={`/details/${product.id}`}>
                    <img className="medium"
                         src={product.image_link}
                         onError={(event) => event.target.style.display = 'none'}
                         />
                </Link>
                <div className="card-body">
                    <Link to={`/details/${product.id}`}>
                        <h5>{product.name}</h5>
                    </Link>
                    <Rating rating={product.rating}/>
                    <div className="price wbdv-product-price-color">
                        ${product.price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
