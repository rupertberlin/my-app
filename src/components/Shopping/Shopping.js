import React, { Component } from "react";
import Classcounter from "./Classcounter";
import Product from "./Product";
import Cart from "./Cart";
import Headline from "../Headline";

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
    emoji: "🍺",
    name: "beer",
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
    this.sumItems = this.sumItems.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.goNext = this.goNext.bind(this);
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
          { product: item.name, units: state.counter, price: item.price*state.counter},
        ],
  
      }));
    } else {
      let pos = this.state.cart.map(function(e) { return e.product; }).indexOf(item.name);
      let tmpCart = this.state.cart;
      tmpCart[pos] = {
        product: item.name,
        units: tmpCart[pos].units + this.state.counter,
        price: tmpCart[pos].price + this.state.counter * item.price,
      }
      this.setState(state => ({
        cart: tmpCart,
      }))
      
    }
    this.setState(state =>({
      counter: 0,
    }))
    setTimeout(() => this.sumItems(), 500);
    setTimeout(() => this.calculateTotal(), 500);
  }

  goNext(current){
    switch(current){
      case 'ice cream':
        this.setState(state =>({
          item: products[1],
        }))
        break;
      case 'donuts':
        this.setState(state =>({
          item: products[2],
        }))
        break;
      case 'beer':
        this.setState(state =>({
          item: products[1],
        }))
        break; 
    }
  }

  removeFromCart(item, count) {
    

  }

  calculateTotal() {
    let sumCart = this.state.cart.reduce((acc, cartItem, index) => {
      return (
        acc+cartItem.price 
      );
    },0)
    this.setState(state => ({
      total: sumCart,
    }))
  }

  sumItems() {
    let sumItems = this.state.cart.reduce((acc, cartItem, index) => {
      return (
        acc+cartItem.units
      );
    },0)
    this.setState(state => ({
      itemsCount: sumItems,
    }))
  }


  render() {
    return (
      <div>
        <Cart
          itemsCount={this.state.itemsCount}
          total={this.state.total}
          cart={this.state.cart}
        />

        <Headline />

        <Product
          products={products}
          item={this.state.item}
          chooseItem={this.chooseItem}
          cart={this.state.cart}
        />

        <Classcounter
          counter={this.state.counter}
          decrement={this.decrement}
          increment={this.increment}
          addToCart={this.addToCart}
          item={this.state.item}
          goNext={this.goNext}
        />

        <div>
          <p>
          {!this.state.cart ||
            this.state.cart.
            filter(e=>e.product===this.state.item.name)
            .map((item) => item.units + ' ' + this.state.item.name.charAt(0).toUpperCase() + this.state.item.name.slice(1) + ' inside your cart.')
            }
            </p>
        </div>
      </div>
    );
  }
}

export default Shopping;
