// import React from 'react'
// function User(props){
//     return(<div>

//         <h1>My name is {props.name} and my age is {props.age}</h1>
       
//     <button onClick={props.del}>Delete</button>
//     <input type="text " onChange={props.eventChange} ></input>
    
//     </div>
   
//     )
// }
// export default User

import React from 'react'
const User=(props)=>{
    return(<div>
        <h1>My name is {props.name} and my age is {props.age}</h1>
        <input type="text" onChange={props.changeText}></input>
        <button onClick={props.del}>Delete</button>
    </div>)
} 
export default User
