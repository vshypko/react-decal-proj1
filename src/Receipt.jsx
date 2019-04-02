import React from "react";

class Receipt extends React.Component {
    countTotal() {
        let total = 0;
        for (let i = 0; i < this.props.items.length; i++) {
            total += (this.props.items[i].price * this.props.items[i].count);
        }
        return total.toFixed(2);
    }

    renderItem(item) {
        return <div className="receipt-item" key={item.name}>
            <div className="receipt-text">
                {item.productName} x {item.count}
            </div>
            <div className="receipt-text">
                ${item.price}
            </div>
        </div>
    }

    render() {
        const items = this.props.items;
        return (
            <div className="receipt">
                <h2 className="receipt-text">Receipt</h2>
                {items.map(this.renderItem)}
                <div className="receipt-item">
                    <div className="total">Total:</div>
                    <div className="total">${this.countTotal()}</div>
                </div>
            </div>
        );
    }
}

export default Receipt;
