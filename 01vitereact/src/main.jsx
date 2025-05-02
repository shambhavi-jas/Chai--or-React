
//import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

//if direct use function from app.jsx...
function MyApp() {
   return (
    <>
   <h2>CHECKING FOR APP FUNCTION DIRECT USE</h2>
    </>
  )
}
//check for without covering in obj use direct obj...
const reactElement={
  type:"a",
  props:{
      href:"https://google.com",
      target:"_blank"
  },
  children:"CLICK ME"
}
//try write formate that matcches reacts....
const anotherEle=(
  <a href="https://google.com" target="_blank">Visit GOOGLE</a>
)
//created by react .... check import of react otherwise it ll not work out...
const reactele=React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  'CLICK REACTOBJ'
)
createRoot(document.getElementById('root')).render(
  //<StrictMode>
  //<MyApp/>    //works
  //MyApp()     //works
  //reactElement//notwork
  //anotherEle  //works
  //reactele

  <App/>
  
  //</StrictMode>,
)
