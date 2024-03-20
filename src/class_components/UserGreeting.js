import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        //If-Else

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Developer</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome User</div>
        //     )
        // }


        //Element Variable

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Developer</div>
        // }
        // else{
        //     message=<div>Welcome User</div>
        // }
        // return<div>{message}</div>


        //Ternary condituional operator
        // return(this.state.isLoggedIn?(<div>Welcome Developer</div>):(<div>Welcome User</div>));


        //Short circuit operator
         return this.state.isLoggedIn&&<div>Welcome Developer</div>

    }
}

export default UserGreeting
