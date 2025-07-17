import {createContext,useContext}from 'react'

export const todocontext=createContext({
    todos:[
        {
            id:1,
            todo:"todomsg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})


export const useTodo=()=>{
    return useContext(todocontext)
}


export const todoprovider=todocontext.provider