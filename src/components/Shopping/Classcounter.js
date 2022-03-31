import React, { Component } from "react";
import "./Counter.css";

class Classcounter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="counter-container">
        <h2>assemble:</h2>
        <div id="decrement" onClick={this.props.decrement}>
          -
        </div>
        <div id="counter">{this.props.counter}</div>
        <div id="increment" onClick={this.props.increment}>
          +
        </div>
        <div id="buttons">

          <button onClick={() => this.props
            .goNext(this.props.item.name)}>
              {!this.props.endButton?'Next':'ok'}
              </button>
        </div>
      </div>
 
    );
  }
}

export default Classcounter;
