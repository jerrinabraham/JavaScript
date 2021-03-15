import React from 'react'
const Pl=()=>{
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>{
  return (<div>
    <li key={number.toString()}>
    <h1>{numbers}</h1>
  </li>
  </div>)

})
}

export default Pl