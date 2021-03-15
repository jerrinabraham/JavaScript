import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css'

class App extends Component{
    state={
        person:[
            {id:"jo",coun:""}
        ]
    }


    lp={
        counters:0
    }
 
    addHandler=()=>{
        this.setState({ count:this.lp.count +1})
          }
          subHandler=()=>{
            this.setState({ count:this.lp.count -1})
          }
    

    deleteHandler=(index)=>{
        let x =[...this.state.person];
        x.splice(index,1)
        this.setState({person:x})
        
    }

    // deletehandler=(index)=>{
      
    //     const vy=[...this.state.persons]; //OR  const vy=Object.assign([],this.state.person); 
    //     vy.splice(index,1);
    //      this.setState({persons:vy})
    //    }

render(){

    

    return(<div>
        
        {this.state.person.map((p,index)=>{
            return<Person 
            key={p.id}
            delete={()=>this.deleteHandler(index)}
            coun={this.props.count}/>
            
        })}
        
                        
                       
                        </div>
    )    
}}



export default App




















      
//     state={
//         name:"CLICK RED POWER BUTTON",
//         switch:false
//     }

//      soakHandler=()=>{
//          this.setState({name:"SOAKING , IT MAY TAKE 5 MINUTES"})
//      }
//      washHandler=()=>{
//         this.setState({name:"WASHING STARTED, IT MAY TAKE 10 MINUTES, "})
//     }
//     spinHandler=()=>{
//         this.setState({name:"SPININING STARTED, DO NOT OPEN LID, HIGH RPM ,"})
//     }
//     rinseHandler=()=>{
//         this.setState({name:"RINSING STARTED, DO NOT OPEN LID, HIGH RPM"})
//     }
    
    
// render(){
//     return(
//     <div className="App">
            
            
//              <h1  >Wahing Machine</h1>
//              <Person  
//                 a={this.soakHandler}
//                 b={this.washHandler}
//                 c={this.spinHandler}
//                 d={this. rinseHandler}
//                nam= {this.state.name}
//                 />
           
             
             
               


//     </div>
 
// )
// }
// }


  