import React from "react";

const Hello = (props) => {
    // return(
        //     <div>
        //         <h1><small>Func and JSX Compo<br></br></small>Hello Dev</h1>
        //     </div>
        // )
        
        // With out JSX
    return(
        React.createElement('div',{id:'hello',className:'dummy'},React.createElement('h1',null,React.createElement('small',null,'Func Compo with out JSX'),React.createElement('br',null,null),`Hello Dev`, props.name,' ' ,props.children))
        
    )
}
export default Hello;