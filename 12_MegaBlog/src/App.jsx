import React, {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css'
import authservice from './appwrite/auth';
import {login,logout} from "./store/authslice"
import { Outlet } from 'react-router-dom';
import {Header,Footer} from './components'



function App() {
  const [loading,setloading]=useState(true);
  const dispatch=useDispatch()
  
  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false));
  },[])

  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
      <Header/>
      <main>
         {/*<Outlet/>*/}
      </main>
      <Footer/>
      </div>
    </div>
  ):null
}

export default App


