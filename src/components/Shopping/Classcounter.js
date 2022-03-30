import React, { Component } from "react";
import "./Counter.css";

class Classcounter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="counter-container">
        <h2>go shopping:</h2>
        <div id="decrement" onClick={this.props.decrement}>
          -
        </div>
        <div id="counter">{this.props.counter}</div>
        <div id="increment" onClick={this.props.increment}>
          +
        </div>
        <div id="buttons">
          <button onClick={() => this.props.addToCart(this.props.item,this.props.count)}>Add</button><button>Remove</button>
        </div>
      </div>
    );
  }
}

export default Classcounter;
