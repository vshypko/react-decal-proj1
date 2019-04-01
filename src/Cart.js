import React from "react";
import "./styles/cart.css";

import Product from "./Product.js";
import ProductData from "./Data"

class Cart extends React.Component {
    render() {
        const data = ProductData.products;
        return (
            <div className="page-content">
                <div className="ui cards">
                    {data.map((data) => (
                        <Product
                            productName={data.name}
                            price={data.cost}
                            limit={data.stock}
                        />
                    ))}
                </div>
            </div>
        );
    }

}

export default Cart;
