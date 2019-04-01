import React from "react";
import "./styles/cart.css";

import Product from "./Product.js";

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content ui cards">
            <Product name={"Apple"} price={2} />
        </div>
    );
  }

}

export default Cart;
