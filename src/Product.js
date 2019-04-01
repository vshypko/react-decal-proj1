import React from "react";

class Product extends React.Component {
    state = {
        itemCounter: 0
    };

    addToCart(numItems) {
        if (numItems > this.props.limit) {
            alert("There are too many " + this.props.name + " in your cart!");
        } else if (this.props.limit === 0) {
            alert("This item is out of stock!");
        } else {
            this.setState({
                itemCounter: this.state.itemCounter + 1
            });
            alert("There are " + numItems + " items in your cart!");
        }
    };

    render() {
        return (
            <div className="card">
                <div className="content">
                    <div className="header">
                        {this.props.productName}
                    </div>
                    <div className="description">
                        Price: ${this.props.price}
                    </div>
                </div>
                <div className="ui bottom attached button" onClick={() => this.addToCart(this.state.itemCounter)}>
                    <i className="add icon"></i>
                    Add to Cart
                </div>
            </div>
        );
    }
}

export default Product;
