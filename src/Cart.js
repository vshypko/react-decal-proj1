import React from "react";
import "./styles/cart.css";

import Product from "./Product.js";
import Receipt from "./Receipt.jsx";
import ProductData from "./Data"

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
        this.state = {
            cartItems: []
        };
    }

    handleAddToCart(productName, price) {
        let item = {
            productName: productName,
            price: price,
            count: 1
        };
        let array = this.state.cartItems.slice();
        let found = false;
        for (let i = 0; i < this.state.cartItems.length; i++) {
            if (this.state.cartItems[i].productName === productName) {
                array[i].count += 1;
                this.setState({
                    cartItems: array
                });
                found = true;
            }
        }
        if (!found) {
            array.push(item);
            this.setState({
                cartItems: array
            });
        }
    }

    handleRemoveFromCart(productName) {
        let result = this.state.cartItems.filter(item => item.productName !== productName);
        this.setState({
            cartItems: result
        });
    }

    render() {
        const data = ProductData.products;
        return (
            <div className="page-content">
                <div className="ui cards">
                    {data.map((data) => (
                        <Product
                            key={data.name}
                            productName={data.name}
                            price={data.cost}
                            onAddToCart={this.handleAddToCart}
                            onRemoveFromCart={this.handleRemoveFromCart}
                        />
                    ))}
                </div>
                <div>
                    <Receipt
                        items={this.state.cartItems}
                    />
                </div>
            </div>
        );
    }

}

export default Cart;
