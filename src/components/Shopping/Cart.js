import { Component } from "react";
import './Cart.css'


class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cart-container">
                <span className="cart-emoji">📦</span>
                <div>summary:<br />
                Items: {this.props.itemsCount}<br />
                Total: {this.props.total} $</div>
            </div>

        );
    }
}

export default Cart;