import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Class button Clicked');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default ClassClick
