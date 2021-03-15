import React, { Component } from 'react';
import styled from 'styled-components'
import Persons from '../Components/Persons/Persons'
import Radium from 'radium'
import Cockpit from '../Components/Cockpit/Cockpit'

import './App.css';








class App extends Component {
  
  
  
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    
  }
  

  state={ 
    persons:[
      {id:"lala",name:"jerr",age:35},
      {id:"lapp",name:"jippu",age:34},
      {id:"lapi",name:"jissu",age:28}
     

    ],
    otherPerson:"kpkp",
    show: false,
    showCockpit:true

   }

 
  
   static getDerivedStateFromProps(props,state){
     console.log('[App.js] getDerivedStateFromProps ' ,props)
     return state;
   }

   shouldComponentUpdate(prevProps,prevState){
     console.log("[App.JS] shouldComponentUpdate")
     return true
   }

   componentDidUpdate(){
    console.log("[App.JS] componentDidUpdat")
   }

   componentDidMount(){
     console.log("[App.js] component did mount")

   }

  //  componentDidUpdate(){
  //    console.log("[App.js ] componentDidUpdate")
  //  }
   

   
  



   togglehandler= () =>{
     const x=this.state.show;
     this.setState({show:!x})
   }
    
   buttonHandler= () =>{
     this.setState({

      persons:[
        
          {id:"lala",name:"manu",age:35},
          {id:"lapp",name:"jippu",age:34},
          {id:"lapi",name:"jissu",age:28}
         
        
      ]


     })
    }
    
    
    deletehandler=(index)=>{
      
      const vy=[...this.state.persons]; //OR  const vy=Object.assign([],this.state.person); 
      vy.splice(index,1);
       this.setState({persons:vy})
     }


     nameChangehandler = (id,event)   =>{
        const index = this.state.persons.findIndex((p) =>{
          return p.id===id;

        });
        const reji = {
          ...this.state.persons[index]
        }
        //Object.assign({},)
        reji.name = event.target.value;
        
        const jissu=[...this.state.persons]
        //Object.assign([],this.state.persons);
        //const users = Object.assign({},this.state.persons);
        
        jissu[index]=reji;
        this.setState({persons : jissu });

        
      }
   render(){
     console.log("[App.js] render")
     
     
     const myStyle={
       backgroundColor:"green",
       color:"yellow",
       font:'inherit',
       border:'5px solid red',
       padding:'15px',
       cursor:'pointer',
       ':hover':{
         backgroundColor:'pink'
       }

      }
     let vp=null;
     if(this.state.show){
       vp=<Persons
          
          persons={this.state.persons}
          clicked={this.deletehandler}
          changed={this.nameChangehandler}
          
          
          />
     
       
      
     }
     



     


     return(
      
       <div className="App"> 
       <button onClick={ ()=> {this.setState({showCockpit:false})}}>  REMOVE COCKPIT  </button>
        
        
       
          {this.state.showCockpit?<Cockpit 
          show={this.state.show} 
          
          let={this.props.anyname}
          persons={this.state.persons}
          clicks={this.togglehandler}/>:null}
          {vp}
        
            </div>
      
      
      
      
     )
   }
  
   
       
    
         
      
        
     
      
     
     
  }





  /*import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component{


    //  static  getDerivedStateFromProps(){
    //      console.log("[Persons.js] getDerivedStateFromProps");
    //      return null ;
    //  }

   shouldComponentUpdate(nextProps,nextState){
        console.log("[Perosns.js] shouldComponentUpdate")
        if(nextProps.persons!==this.props.persons){
            return true;
            }
        else{
                return false;
            }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdat")
         return {message:"snapshot"};
     }

   
     componentDidUpdate(prevProps, prevState, snapshot){
         console.log("[Persons.js] componentDidUpdate ")
         console.log(snapshot);
   }

   componentWillUnmount(){
    console.log("[Persons.js] componentWillUnmount ")
}
    render(){
        console.log("persons.js rendering....")
        return  this.props.persons.map((p,index)=>{
                return (
                    <Person 
            
               name={p.name} 
               age={p.age}
               key={p.id}
               del={()=>this.props.clicked(index)}
               change={(event)=>this.props.changed(p.id,event)}
               
               >
               
               </Person>
                )
            }
                )
        
    }
}
   */