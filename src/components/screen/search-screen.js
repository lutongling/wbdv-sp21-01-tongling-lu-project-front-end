import React, {useState, useEffect} from 'react'
import productService from "../../services/product-service"
import {useParams, useHistory, Link} from "react-router-dom";
import Product from "../product";
import {useSelector} from "react-redux";
import userService from "../../services/user-service";

const Search = () => {
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const history = useHistory()

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        setSearchTitle(title)
        if(title) {
            productService.findProductByTitle(title)
                .then(results => setResults(results))
        }

        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })

    }, [title])

    return(
        <div>
            <div className="row wbdv-bgcolor-darkblue wbdv-sticky-top wbdv-padding-5px wbdv-text-center">
                <div
                    className="col-2 wbdv-margin-right-45px wbdv-margin-top-5px">
                    <h3>
                        <a className="wbdv-text-home-logo" href="/">Treasure Hunter</a>
                    </h3>
                </div>
                <div className="col-6 wbdv-margin-top-5px">
                    <input onChange={e => {setSearchTitle(e.target.value)}}
                           className="form-control"
                           value={searchTitle}
                           placeholder="Search a brand for makeups!"/>
                </div>
                <div className="col-1 wbdv-margin-top-5px">
                    <i onClick={() => {
                        history.push(`/search/${searchTitle}`)
                        console.log(results.length)
                    }}
                       className="fas fa-search fa-2x wbdv-color-mint"></i>
                </div>
                <div className="col-1 wbdv-margin-top-5px wbdv-hide-sm-screen">
                    <Link to={`/cart/:pid?/${currentUser._id}`} className="fas fa-shopping-cart fa-2x wbdv-color-light-salmon">
                        &nbsp; <span className="wbdv-text-icon">Cart</span>
                    </Link>
                </div>

                {
                    Object.keys(currentUser).length === 0 &&
                    <div className="col-1 wbdv-margin-top-5px wbdv-nowrap wbdv-hide-sm-screen">
                        <Link to="/login" className="fas fa-sign-in-alt fa-2x wbdv-color-light-salmon">
                            &nbsp; <span className="wbdv-text-icon">Log In</span>
                        </Link>
                    </div>
                }

                {
                    Object.keys(currentUser).length !== 0 &&
                    <div className="col-1 wbdv-margin-top-5px wbdv-nowrap wbdv-hide-sm-screen">
                        <Link to="/profile" className="far fa-user-circle fa-2x wbdv-color-light-salmon">
                            &nbsp; <span className="wbdv-text-icon">Profile</span>
                        </Link>
                    </div>
                }
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