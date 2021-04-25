import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/screen/home-screen";
import DetailScreen from "./components/screen/detail-screen";
import Search from "./components/screen/search-screen";
import CartScreen from "./components/screen/cart-screen";
import Login from "./components/screen/login-screen";
import Register from "./components/screen/register-screen";
import Profile from "./components/screen/profile-screen";
import ProfileLogout from "./components/screen/profile-logout-screen";
import Order from "./components/screen/order-screen";
import Seller from "./components/screen/seller-screen";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route
                  exact={true}
                  path={["/", "/search", "/search/:title"]}>
                  <Search/>
              </Route>
              <Route path="/" exact={true}>
                  <HomeScreen/>
              </Route>
              {/*<Route path="/" exact={true} component={HomeScreen}/>*/}
              <Route path="/details/:pid" component={DetailScreen}/>
              <Route path="/cart/:uid?" component={CartScreen}/>
              <Route path="/login" exact={true}>
                  <Login/>
              </Route>
              <Route path="/register" exact={true}>
                  <Register/>
              </Route>
              {/*<Route path="/login" component={LoginScreen}/>*/}
              {/*<Route path="/register" component={Register}/>*/}
              <Route path="/profile" exact={true}>
                  <Profile/>
              </Route>

              <Route path="/profile/:uid" exact={true}>
                  <ProfileLogout/>
              </Route>

              <Route path="/order" exact={true}>
                  <Order/>
              </Route>

              <Route path="/seller" exact={true}>
                  <Seller/>
              </Route>

          {/*<div className="wbdv-bgcolor-darkblue wbdv-sticky-top wbdv-padding-5px wbdv-text-center">*/}
          {/*    <div className="row">*/}
          {/*        <div*/}
          {/*            className="col-2 wbdv-margin-right-45px">*/}
          {/*            <h3>Treasure Hunter</h3>*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*            <input className="form-control"*/}
          {/*                   value="Search Products You Like"/>*/}
          {/*        </div>*/}
          {/*        <div className="col-1 wbdv-margin-top-5px">*/}
          {/*            <i className="fas fa-search fa-2x"></i>*/}
          {/*        </div>*/}
          {/*        <div className="col-1 wbdv-margin-top-5px wbdv-hide-sm-screen">*/}
          {/*            <i href="/cart" className="fas fa-shopping-cart fa-2x">&nbsp; Cart</i>*/}
          {/*        </div>*/}
          {/*        <div className="col-1 wbdv-margin-top-5px wbdv-nowrap wbdv-hide-sm-screen">*/}
          {/*            <i href="/signin" className="fas fa-sign-in-alt fa-2x">&nbsp; Sign In</i>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}

          {/*<div className="container-fluid">*/}
          {/*    <br/>*/}
          {/*    <br/>*/}
          {/*    <br/>*/}

          {/*    <Route path="/" exact={true} component={HomeScreen}/>*/}
          {/*    <Route path="/product/:id" component={DetailScreen}/>*/}
          {/*</div>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
