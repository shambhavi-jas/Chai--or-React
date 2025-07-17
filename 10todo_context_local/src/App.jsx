import { useEffect, useState } from 'react'
import { todoprovider } from './contexts'
import './App.css'

function App() {
  const [todos, settodos] = useState([])

  const addTodo=(todo)=>{
    settodos((prev)=>[{id:Date.now(),...todo},prev])
  }
  const updateTodo=(id,todo)=>{
    settodos((prev)=>prev.map((prevtodo)=>(
      prevtodo.id===id?todo:prevtodo
    )))
  } 
  const deleteTodo=(id)=>{
    settodos((prev)=>prev.filter((prevtodo)=>prevtodo.id!=id))
  }
  const toggleComplete=()=>{
    settodos((prev)=>prev.map(
      (prevtodo)=>prevtodo.id===
      id?{...prevtodo,completed:!prevtodo.completed}:prevtodo))
  }


  useEffect(()=>{
    const todoitems=JSON.parse(localStorage.getItem("todoitems"))
    if(todoitems&&todoitems.length>0){
      settodos(todoitems)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todoitems",JSON.stringify(todoitems))
  },[todoitems])

  return (


  <todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>

   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
    </div>

    </todoprovider>
  )
}

export default App
