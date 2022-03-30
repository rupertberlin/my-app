import { Component } from "react";
import './Cart.css'


class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cart-container">
                <span className="cart-emoji">🛒</span>
                <p>Items: {this.props.itemsCount}<br /><br />
                Total: {this.props.total} </p>
            </div>

        );
    }
}

export default Cart;