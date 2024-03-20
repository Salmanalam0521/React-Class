import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "" // Added message state to manage the message
    };
  }

  increaseValue() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
      if (this.state.count >= 0) {
        this.setState({ message: "" }); 
      }
    });
  }
//   increaseValueOne() {
//     this.setState((preState)=>({
//         count:preState.count+1
//     }))
//     console.log(this.state.count);
//   }
  decreaseValue() {
    if (this.state.count <= 0) {
      // Check if count is already 0 or negative
      this.setState({ message: "Min Count Reached" }); // Set message if count is 0 or negative
    } else {
      this.setState({ count: this.state.count - 1 }); // Decrease count if count is positive
    }
  }
// increaseFive(){
//     this.increaseValueOne();this.increaseValueOne();this.increaseValueOne();this.increaseValueOne();this.increaseValueOne();
// }
  render() {
    return (
      <div>
        <h4>Count - {this.state.count}</h4>
        <button onClick={() => this.increaseValue()}>Increment</button>
        <button onClick={() => this.decreaseValue()}>Decrement</button>
        <span>{this.state.message}</span>
      </div>
    );
  }
}
