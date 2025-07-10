import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [username,setname]=useState('')
    const [password,setpw]=useState('')

    const {setuser}=useContext(UserContext)

    const handlesubmit=(e)=>{
      e.preventDefault()
      setuser({username,password})
    }

  return (
    <div>
        <h2>LOGIN</h2>

        <input type="text" 
        value={username}
        onChange={(e)=>setname(e.target.value)}
        placeholder='username' />
        {"  "}
        <input type="text"
        value={password}
        onChange={(e)=>setname(e.target.value)}
        placeholder='password' />

        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login