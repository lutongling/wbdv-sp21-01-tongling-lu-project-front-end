import React from 'react'
import data from './data'
import Product from "./components/product";

function App() {
  return (
      <div>
          <div className="wbdv-bgcolor-darkblue wbdv-sticky-top wbdv-padding-5px wbdv-text-center">
              <div className="row">
                  <div
                      className="col-2 wbdv-margin-right-45px">
                      <h3>Treasure Hunter</h3>
                  </div>
                  <div className="col-6">
                      <input className="form-control"
                             value="Search Products You Like"/>
                  </div>
                  <div className="col-1 wbdv-margin-top-5px">
                      <i className="fas fa-search fa-2x"></i>
                  </div>
                  <div className="col-1 wbdv-margin-top-5px wbdv-hide-sm-screen">
                      <i href="/cart" className="fas fa-shopping-cart fa-2x">&nbsp; Cart</i>
                  </div>
                  <div className="col-1 wbdv-margin-top-5px wbdv-nowrap wbdv-hide-sm-screen">
                      <i href="/signin" className="fas fa-sign-in-alt fa-2x">&nbsp; Sign In</i>
                  </div>
              </div>
          </div>

          <br/>
          <br/>
          <br/>
          <br/>

          <div className="row wbdv-row center">
              {
                  data.products.map(product => (
                      <Product key={product._id}
                               product={product}/>
                  ))
              }


          </div>
      </div>

  );
}

export default App;
