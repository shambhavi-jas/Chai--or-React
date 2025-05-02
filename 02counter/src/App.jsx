import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter]=useState(10);

//let counter=15;
const addfun=()=>{
       //console.log("clicked",counter);
       if(counter + 1 > 20){
        alert("Limit exceed")
      } else {
        setCounter(counter+1)
      }
}
const removefun =()=>{
  if(counter-1 < 0){
    alert("Value cannot be negetive")
  } else {
    setCounter(counter-1)
  }
}
  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addfun}>ADD</button>
      <br/>
      <button onClick={removefun}>REMOVE</button>
    </>
  )
}

export default App
