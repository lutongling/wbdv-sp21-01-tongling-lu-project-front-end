import React from 'react'
import Rating from "./rating";

const Product = ({product}) => {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div key={product.id} className="card">
            <a href={`/product/${product.id}`}>
                <img className="medium"
                     src={product.image_link}
                     alt={product.name}/>
            </a>
            <div className="card-body">
                <a href={`/product/${product.id}`}>
                    <h5>{product.name}</h5>
                </a>
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
