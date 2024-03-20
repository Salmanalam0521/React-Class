import React from 'react';

// function Greet(){
//     return <h1>Hello Developer</h1>
// }
// ES6
export const Greet = props =>{
    const {name,children}=props;
    console.log(name);
 return(
    <><h1><small>Functional Component<br></br></small>Hello Developer {name} </h1><br></br>{children}</>
 )
}
