import React, { Component } from "react";
import Classcounter from "./Classcounter";
import Product from "./Product";
import Cart from "./Cart";
import Headline from "../Headline";
import Finishing from "./Finishing";

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
      cart: [
        {
          product: "ice cream",
          units: 0,
          price: 0,
        },
        {
          product: "donuts",
          units: 0,
          price: 0,
        },
        {
          product: "beer",
          units: 0,
          price: 0,
        },
      ],
      endButton: false,
      finishing: false,
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.chooseItem = this.chooseItem.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.sumItems = this.sumItems.bind(this);
    this.goNext = this.goNext.bind(this);
    this.closeFinishing = this.closeFinishing.bind(this);
  }
  decrement() {
    if (this.state.counter > 0) {
      this.setState((state) => ({
        counter: state.counter - 1,
      }));
      setTimeout(() => this.updateCart(this.state.item), 105);
    }
  }

  increment() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    setTimeout(() => this.updateCart(this.state.item), 105);
  }

  chooseItem(item) {
    setTimeout(
      () =>
        this.setState((state) => ({
          item: item,
          counter: Number(
            this.state.cart
              .filter((e) => e.product === item.name)
              .map((e) => e.units)
          ),
          finishing: false,
        })),
      105
    );
    item.name === 'beer'?this.setState(state=>({endButton:true})):
      this.setState(state=>({endButton:false}));
  }

  updateCart(item) {
    let pos = this.state.cart
      .map(function (e) {
        return e.product;
      })
      .indexOf(item.name);
    let tmpCart = this.state.cart;
    tmpCart[pos] = {
      product: item.name,
      units: this.state.counter,
      price: this.state.counter * item.price,
    };
    this.setState((state) => ({
      cart: tmpCart,
    }));

    setTimeout(() => this.sumItems(), 105);
    setTimeout(() => this.calculateTotal(), 105);
  }


  goNext(current) {
    switch (current) {
      case "ice cream":
        this.chooseItem(products[1]);
        break;
      case "donuts":
        this.chooseItem(products[2]);
        break;
      case "beer":
        this.setState((state) => ({
          finishing: true,
        }));
        break;
    }
  }

  closeFinishing() {
    this.setState(state => ({
      finishing: !this.state.finishing,
    }))
  }

  calculateTotal() {
    let sumCart = this.state.cart.reduce((acc, cartItem, index) => {
      return acc + cartItem.price;
    }, 0);
    this.setState((state) => ({
      total: sumCart,
    }));
  }

  sumItems() {
    let sumItems = this.state.cart.reduce((acc, cartItem, index) => {
      return acc + cartItem.units;
    }, 0);
    this.setState((state) => ({
      itemsCount: sumItems,
    }));
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
          item={this.state.item}
          goNext={this.goNext}
          endButton={this.state.endButton}
        />

        {this.state.finishing &&
        <Finishing 
        close={this.closeFinishing}
        />}

        <div>
          <p>
            {!this.state.cart ||
              this.state.cart
                .filter((e) => e.product === this.state.item.name)
                .map(
                  (item) =>
                    item.units +
                    " " +
                    this.state.item.name.charAt(0).toUpperCase() +
                    this.state.item.name.slice(1) +
                    " inside your box."
                )}
          </p>
        </div>
      </div>
    );
  }
}

export default Shopping;
