import React from 'react'
import Rating from "./rating";
import {Link} from "react-router-dom";

const Product = ({product}) => {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <br/>
            <br/>
        <div key={product.id} className="card">
            <Link to={`/details/${product.id}`}>
                <img className="medium"
                     src={product.image_link}
                     alt={product.name}/>
            </Link>
            <div className="card-body">
                <Link to={`/details/${product.id}`}>
                    <h5>{product.name}</h5>
                </Link>
                <Rating rating={product.rating}/>
                <div className="price">
                    ${product.price}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Product
