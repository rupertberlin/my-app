import React, { Component } from "react";
import Classcounter from "./Classcounter";
import Product from "./Product";
import Cart from "./Cart";

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      item: products[0],
      itemsCount: 0,
      total: 0,
      cart: [],
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.chooseItem = this.chooseItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }
  decrement() {
    if (this.state.counter > 0) {
      this.setState((state) => ({
        counter: state.counter - 1,
      }));
    }
  }

  increment() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  chooseItem(item) {
    this.setState((state) => ({
      item: item,
      counter: 0,
    }));
  }

  addToCart(item, count) {
    let allreadyIn = this.state.cart.filter(
      (insides) => insides.product == item.name
    );

    if (allreadyIn.length === 0) {
      this.setState((state) => ({
        cart: [
          ...this.state.cart,
          { product: item.name, units: state.counter, price: item.price },
        ],
        counter: 0,
      }));
    } else {
      console.log(this.state);
      console.log(allreadyIn);
      this.setState((state) => ({
        
        cart: [...this.state.cart, { /* units: state.cart.units + state.counter  */}],
      }));
    }

    this.calculateTotal();
  }

  calculateTotal() {
    this.setState((state) => {
      total: this.state.cart.reduce((acc, item, index) => {
        return acc + item.unit * item.price;
      }, 0);
    });
  }

  render() {
    return (
      <div>
        <Cart
          itemsCount={this.state.itemsCount}
          total={this.state.total}
          cart={this.state.cart}
        />

        <Product
          products={products}
          item={this.state.item}
          chooseItem={this.chooseItem}
        />

        <Classcounter
          counter={this.state.counter}
          decrement={this.decrement}
          increment={this.increment}
          addToCart={this.addToCart}
          item={this.state.item}
        />

        <div>
          {!this.state.cart ||
            this.state.cart.map((item) => item.units + " " + item.product)}
        </div>
      </div>
    );
  }
}

export default Shopping;
