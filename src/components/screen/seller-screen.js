import React, {useEffect, useState} from 'react'
import Product from "../product";
import userService from "../../services/user-service";
import productService from "../../services/product-service"
import {useHistory} from "react-router-dom";

const Seller = () => {
    const [products, setProducts] = useState([]);
    const [currentUser, setCurrentUser] = useState({})
    const [newProduct, setNewProduct] = useState({});
    const history = useHistory()

    const sellerId = currentUser._id;
    const is_managed = true

    const refreshPage = () => {
        window.location.reload();
    }

    // const deleteProduct = () => {
    //     productService.deleteProduct()
    //         .then(result => console.log(result))
    // }

    useEffect(() => {
        setNewProduct.user = sellerId;

        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
                console.log(currentUser)
            })

        productService.findAllProducts_DB()
            .then((p) => {
                setProducts(p)
            })

    }, [sellerId])

    return (
        <div>
            <button className="fas fa-2x fa-arrow-left"
                    onClick={history.goBack}>
            </button>
        <div className="container">
            <h1 className="font-weight-bolder wbdv-text-italic">Seller Product Management</h1>
            <br/>
            <div className="container">
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label font-weight-bolder">
                        Product Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
                    </div>
                    <br/>
                    <br/>

                    <label className="col-sm-2 col-form-label font-weight-bolder">
                        Rating
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               onChange={(e) => setNewProduct({...newProduct, rating: e.target.value})}/>
                    </div>
                    <br/>
                    <br/>

                    <label className="col-sm-2 col-form-label font-weight-bolder">
                        Price
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div>
                        <button
                            onClick={() => {
                                productService.createProduct(newProduct)
                                alert("product created!")
                                refreshPage()
                            }}
                            className="btn wbdv-bg-update btn-block">&nbsp;
                            <span>Add Product</span>
                        </button>
                    </div>

                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h4 className="wbdv-text-italic">Products Already Added</h4>
            {
                Object.keys(currentUser).length !== 0 &&
                <div className="row wbdv-row center">
                    {
                        products.map((product) => {
                            return(
                                <Product key={product._id}
                                         product={product}
                                         is_managed={is_managed}
                                         // deleteProduct={deleteProduct}
                                />
                            )
                        })
                    }
                </div>
            }

        </div>
        </div>
    )
}

export default Seller