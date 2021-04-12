import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import Rating from "../rating";
import productService from "../../services/product-service"

const DetailScreen = () => {
    const {pid} = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        productService.findProductById(pid)
            .then(product => setProduct(product))
    })

    return(
        <div>
            <Link className="fas fa-2x fa-arrow-left"
                  to='/'>
            </Link>
            <div className="row">
                <div className="col-lg-5 col-sm-8 col-xs-12">
                    <img className="medium" src={product.image_link} alt={product.name}/>
                </div>
                <div className="col-lg-3 col-sm-8 col-xs-12">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews ={product.numReviews}></Rating>
                        </li>
                        <br/>
                        <li>
                            Price: ${product.price}
                        </li>
                        <br/>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-8 col-xs-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="wbdv-row">
                                <div>Price</div>
                                <div className="price">${product.price}</div>
                            </div>

                            {/*<div className="wbdv-row">Status*/}
                            {/*    <div>*/}
                            {/*        {product.countInStock>0 ? (<span className="text-success font-weight-bold">In Stock</span> )*/}
                            {/*                                : (<span className="text-danger font-weight-bold">&nbsp; Unavailable</span>)}*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="wbdv-row center">
                                <button className="wbdv-primary-button block">Add to Cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailScreen