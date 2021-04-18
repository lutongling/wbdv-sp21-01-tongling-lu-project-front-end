import React, {useState, useEffect} from 'react'
import Product from "../product";
import productService from "../../services/product-service"

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        productService.findAllProducts()
            .then((p) => {
                setProducts(p)
            })
    },[])

    return(
        <div>
            <br/>
            <div className="row wbdv-row center">
                {
                    products.map((product) => {
                        return(
                            <Product key={product._id}
                                 product={product}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeScreen