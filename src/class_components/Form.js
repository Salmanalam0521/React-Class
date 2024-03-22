import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'React'
      }
    }
    
handleUsernameChange=(event)=>{
    this.setState({
        username:event.target.value
    })
}
handleCommentsChange=(event)=>{
    this.setState({
        comments:event.target.value
    })
}
handleTopicChange=event=>{
    this.setState({
        topic:event.target.value
    })
}
handleSubmit= event =>{
    event.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
}

  render() {
    const {username,comments,topic}=this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username </label>
            <input type='text' value={username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>Comments </label>
            <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Topic </label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="React">React</option>
                <option value="Java">Java</option>
                <option value="MySql">MySql</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
