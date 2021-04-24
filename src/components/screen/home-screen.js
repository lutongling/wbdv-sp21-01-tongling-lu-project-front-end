import React, {useState, useEffect} from 'react'
import Product from "../product";
import productService from "../../services/product-service"
import userService from "../../services/user-service";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [anonProducts, setAnonProducts] = useState([]);
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        productService.findAllProducts()
            .then((p) => {
                setProducts(p)
            })

        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
                console.log(currentUser)
            })

        productService.findProductByTitle("maybelline")
            .then(anonProducts => {
                setAnonProducts(anonProducts)
            })

    }, [])

    return(
        <div>
            <br/>

            {
                Object.keys(currentUser).length === 0 &&
                <div className="row wbdv-row center">
                    {
                        anonProducts.map((product) => {
                            return(
                                <Product key={product._id}
                                         product={product}/>
                            )
                        })
                    }
                </div>
            }

            {
                Object.keys(currentUser).length !== 0 &&
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
            }

        </div>
    )
}

export default HomeScreen