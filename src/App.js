import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { productfetching, cartfetching, userfetching, products, user, cart , onRequestProducts,onRequestCart,onRequestUser, error } = this.props;

    return (
      <div className="App">
        <table>
          <tr>
            <td>
            <header className="App-header">
            <h1 className="App-title">Product:</h1>
              {products || "No product"} 
            </header>
            </td>

            <td>
            <header className="App-header">
            <h1 className="App-title">User:</h1>
              {user || "No user"}
            </header> 
            </td>

            <td>
            <header className="App-header">
            <h1 className="App-title"> Cart :</h1>
              {cart || "Nothing in the cart"} 
            </header> 
            </td>
            </tr>
        </table>


        {productfetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={onRequestProducts}>Request Product</button>
        )}

        {cartfetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={onRequestCart}>Request Cart </button>
        )}
        
        {userfetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={onRequestUser}>Request User </button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartfetching: state.cartfetching,
    userfetching: state.userfetching,
    productfetching: state.productfetching,
    products: state.products,
    cart: state.cart,
    user: state.user,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestProducts: () => dispatch({ type: "API_CALL_REQUEST_PRODUCTS" }),
    onRequestCart: () => dispatch({ type: "API_CALL_REQUEST_CART" }),
    onRequestUser: () => dispatch({ type: "API_CALL_REQUEST_USER" }),
    onRequestToken: () => dispatch({ type: "API_CALL_REQUEST_TOKEN" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
