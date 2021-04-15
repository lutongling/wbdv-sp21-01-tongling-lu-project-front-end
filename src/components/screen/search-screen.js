import React, {useState, useEffect} from 'react'
import productService from "../../services/product-service"
import {useParams, useHistory, Link} from "react-router-dom";
import Product from "../product";
import {useSelector} from "react-redux";

const Search = () => {
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState([])
    const history = useHistory()

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        setSearchTitle(title)
        if(title) {
            productService.findProductByTitle(title)
                .then(results => setResults(results))
        }
    }, [title])

    return(
        <div>
            <div className="row wbdv-bgcolor-darkblue wbdv-sticky-top wbdv-padding-5px wbdv-text-center">
                <div
                    className="col-2 wbdv-margin-right-45px">
                    <h3>Treasure Hunter</h3>
                </div>
                <div className="col-6">
                    <input onChange={e => {setSearchTitle(e.target.value)}}
                           className="form-control"
                           value={searchTitle}/>
                </div>
                <div className="col-1 wbdv-margin-top-5px">
                    <i onClick={() => history.push(`/search/${searchTitle}`)}
                       className="fas fa-search fa-2x"></i>
                </div>
                <div className="col-1 wbdv-margin-top-5px wbdv-hide-sm-screen">
                    <i href="/cart" className="fas fa-shopping-cart fa-2x">&nbsp; Cart {cartItems.length}</i>
                </div>
                <div className="col-1 wbdv-margin-top-5px wbdv-nowrap wbdv-hide-sm-screen">
                    <i href="/signin" className="fas fa-sign-in-alt fa-2x">&nbsp; Sign In</i>
                </div>
            </div>

            <br/>
            <br/>

            <div className="row wbdv-row center">
                {
                    results.map(p => (
                        <Product key={p.id} product={p}/>
                    ))
                }
            </div>
        </div>

    )
}

export default Search