import React, {Component} from 'react';
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      double: false // default state(single increment) is true, other state(double increment) is false. make other state the variable labeled false
    };
  }
  increment = () => {
    // let inc = this.state.double ? 2:1; 
    if (this.state.count > -1 && this.state.count <= 19 ) { // cannot increment if count = 20
      this.setState ({ // use setState to change state
        count: (this.state.double) ? this.state.count +2: this.state.count +1
        // condition ? if true, do this : if false, do this
      })
    }
  }
  decrement = () => {
      if (this.state.count >= 1 && this.state.count <= 20 ) { // cannot increment if count = 0
        this.setState ({ // use setState to change state
          count: (this.state.double) ? this.state.count -2: this.state.count -1
        })
    }
  }
  
  clear = () => {
    this.setState ({
      count: this.state.count = 0
    })    
  }
  toggle = () => {
    this.setState ({
      double: !this.state.double // switches between true and false, no need for if, else statement
    })
    // if double=true, turn to false
    // if double=false, turn to true
  }
  render() {
    let string;
    if (this.state.double) { // if true
      string = 'Currently: Double Increment. Click to switch to Single Increment'
    } else {
      string = 'Currently: Single Increment. Click to switch to Double Increment'
    }
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          <button type="button" onClick={this.clear}>Clear</button>
          <button type="button" onClick={this.toggle}>{string}</button> 
        </div>
      </div>
    );
  }
} // render in under class
export default Counter;
// if (this.state.toggle) {
//   return false
// } return true