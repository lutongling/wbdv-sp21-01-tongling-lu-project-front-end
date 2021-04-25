import React, {useEffect, useState} from 'react'
import Product from "../product";
import userService from "../../services/user-service";
import productService from "../../services/product-service"

const Seller = () => {
    const [products, setProducts] = useState([]);
    const [currentUser, setCurrentUser] = useState({})
    const [newProduct, setNewProduct] = useState({});

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
            <h1>Seller Product Management</h1>
            {/*{currentUser._id}*/}
            <br/>
            <div className="container">
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">
                        Product Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
                    </div>
                    <br/>
                    <br/>

                    {/*<label className="col-sm-2 col-form-label">*/}
                    {/*    Image URL*/}
                    {/*</label>*/}
                    {/*<div className="col-sm-10">*/}
                    {/*    <input type="text"*/}
                    {/*           className="form-control"*/}
                    {/*           onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>*/}
                    {/*</div>*/}

                    <label className="col-sm-2 col-form-label">
                        Rating
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               onChange={(e) => setNewProduct({...newProduct, rating: e.target.value})}/>
                    </div>
                    <br/>
                    <br/>

                    <label className="col-sm-2 col-form-label">
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
                            className="fas fa-plus fa-2x float-right">&nbsp; Add Product</button>
                    </div>

                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h3>Products Already Added</h3>
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
    )
}

export default Seller