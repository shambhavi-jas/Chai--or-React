import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  let tempobj={
    name:"sam",
    age:21
  }
  let temparr=[1,2,3,4];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind check</h1>
      <Cards username="chaiorreact" myarr={temparr} btntext="CLICK"/>
      <Cards username="react series"/>
    </>
  )
}

export default App;
