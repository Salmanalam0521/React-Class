import React,{Component} from "react";

class Welcome extends Component{
 
    render(){
        //props Destructuring
        const {name,children}=this.props

        //State Destructuring
        //const {state1,state2}=this.state;
        return <h1><small>Class Component<br></br></small>Welcome Developer {name} {children}</h1>
    }
}

export default Welcome;