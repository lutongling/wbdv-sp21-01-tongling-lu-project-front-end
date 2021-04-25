import React, {useEffect, useState} from 'react'
import Product from "../product";
import userService from "../../services/user-service";
import productService from "../../services/product-service"

const Seller = () => {
    const [products, setProducts] = useState([]);
    const [currentUser, setCurrentUser] = useState({})
    const sellerId = currentUser._id;

    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
                console.log(currentUser)
            })

        productService.findProductBySellerId(sellerId)
            .then(products => {
                setProducts(products)
            })
    }, [sellerId])

    return (
        <div>
            <h1>Seller Product Management</h1>
            {currentUser._id}
            {/*{products._id}*/}
            <button className="fas fa-plus fa-2x float-right"></button>

            {
                Object.keys(currentUser).length !== 0 &&
                <div className="row wbdv-row center">
                    {
                        // products.map((product) => {
                        //     return(
                        //         <Product key={product._id}
                        //                  product={product}/>
                        //     )
                        // })
                    }
                </div>
            }

        </div>
    )
}

export default Seller