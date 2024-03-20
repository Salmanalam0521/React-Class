import React, { Component } from 'react'
{/**
* There are total 4 approches to bind events
*/}
export class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }
    //3rd approach binding event in class constructor
    //this.clickHandler=this.clickHandler.bind(this);
  }
  // clickHandler(){
  //     this.setState({
  //         message:'GoodBye!'
  //     })
  //     console.log(this);
  // }

  //4th Approach use arrow function as class property
  clickHandler = () => {
    this.setState({
      message: 'GoodBye!'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/**
         * 1st approach in render
         */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/**
         * 2nd approach arrow function in render
         */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

         <button onClick={this.clickHandler}>Click</button> 

      </div>
    )
  }
}

export default EventBind
