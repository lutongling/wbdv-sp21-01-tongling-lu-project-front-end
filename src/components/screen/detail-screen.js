import React, {useEffect, useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import Rating from "../rating";
import productService from "../../services/product-service"
import userService from "../../services/user-service";

const DetailScreen = () => {
    const {pid} = useParams();
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [currentUser, setCurrentUser] = useState({})
    const history = useHistory()

    useEffect(() => {

        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })

        productService.findProductById(pid)
            .then(product => setProduct(product))

    }, [])

    // useEffect(() => {
    //     productService.findProductById(pid)
    //         .then(product => setProduct(product))
    // })

    // const goBack = () => {
    //     history.goBack()
    // }

    return(
        <div>
            <button className="fas fa-2x fa-arrow-left"
                    onClick={history.goBack}>
            </button>

            <br/>
            <br/>
            <div className="container">

                <div className="row">
                    <div className="col-lg-5 col-sm-8 col-xs-12">
                        <img className="medium" src={product.image_link}
                             onError={(event) => event.target.style.display = 'none'}/>
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
                                <h3>Price: ${product.price}</h3>
                            </li>
                            <br/>
                            <br/>
                            <li>
                                <span className="font-weight-bold text-info wbdv-lg-text">Description:</span>
                            </li>
                            <br/>
                            <li>
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

                                <div className="wbdv-row">
                                    <div>Qty</div>
                                    <div>
                                        <select value={quantity}
                                                onChange={e => {setQuantity(e.target.value)}}>
                                            {
                                                [...Array(50).keys()].map(num => (
                                                    <option key={num+1} value={num+1}>
                                                        {num + 1}
                                                    </option>
                                                ))

                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="wbdv-row center">
                                    <button onClick={() => history.push(`/cart/${pid}?quantity=${quantity}`)}
                                            className="wbdv-primary-button block">Add to Cart</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*<div>*/}
                {/*    <h2 id="reviews">Reviews</h2>*/}
                {/*    {!product.reviews &&*/}
                {/*     (<h5>There is no Review</h5>)}*/}
                {/*</div>*/}

            </div>

        </div>
    )
}

export default DetailScreen