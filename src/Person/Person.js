
import React, { Component } from 'react'
class Person extends Component{
    state={
         
        count:0
    }


    addHandler=()=>{
        this.setState({ count:this.state.count +1})
          }
          subHandler=()=>{
            this.setState({ count:this.state.count -1})
              }
   render(){
      


     
      return(<div className="App">
         
         <h1>HELLO </h1>
         <button onClick={this.props.delete} >counter -{this.state.count} / Delete : </button>
         <button onClick={this.addHandler}>Add:</button>
         <button onClick={this. subHandler}>Sub:</button>
         
         </div>)
   }
}
   

  
export default Person

//<button >Delete</button>
// class Person extends Component{
//    state={
//       name:"",
//       switch:false
//   }

  

//   switchHandler=()=>{
//    this.setState({
//        name:"",
//        switch:!this.state.switch
//    })
// }
//    render(){
//       const  styl={
//          backgroundColor:"red",
//          color:"yellow"
//      }
//       const red={
//          backgroundColor:"grey",
//          color:"red"
//       }
   
//       const blue={
//          backgroundColor:"grey",
//          color:"blue"
//       }
   
//       const green={
//          backgroundColor:"grey",
//          color:"green"
//       }
   
//       const yellow={
//          backgroundColor:"grey",
//          color:"yellow"
//       }
      
   
   
//    return(
//       <div className={classes.Content}>
//                   <button onClick={this.switchHandler}>{this.state.switch? <p>POWER BUTTON OFF </p>:<p>POWER BUTTON ON</p>}</button>
//                   <h1 >{this.props.nam}</h1>
//                   <button>hi</button>
//                   <button onClick={this.props.a}>SOAK</button>
//                   <button  onClick={this.props.b}>WASH</button>
//                   <button onClick={this.props.c}>SPIN</button>
//                   <button  onClick={this.props.d}>RINSE</button>
//       </div>
//    )
   
      
   


// }
// }

// export default Person