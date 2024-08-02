import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, updateTodo } from '../features/todo/todoSlice'
import { useRef } from 'react'
function Todos() {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
    const [todoEditingId,setTodoEditingId]=useState(null)
    const [todoMsg,setTodoMsg]=useState('')
    const inputRef=useRef(null)
    const handleSaveClick=(todo)=>{
      dispatch(updateTodo({id:todo.id,text:todoMsg}))
      setTodoEditingId(null)
    }
    const handleEditClick=(todo)=>{
      setTodoEditingId(todo.id)
      setTodoMsg(todo.text)
      setTimeout(() => {
        inputRef.current&&inputRef.current.focus()&&inputRef.current.setSelectionRange(todoMsg.length, todoMsg.length)
      }, 300);
    }
    
  return (
    <>
    {todos.map((todo)=>(
        <div key={todo.id} className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${todo.status?'bg-green-500 text-white line-through duration-300':'bg-gray-800 duration-300'} `}>
            <input type='checkbox' checked={todo.status} onChange={()=>dispatch(toggleTodo(todo.id))}/>
            <input className='text-white outline-none text-center bg-transparent' value={todo.id===todoEditingId?todoMsg:todo.text} readOnly={todo.id!==todoEditingId} onChange={(e)=>setTodoMsg(e.target.value)} ref={todoEditingId===todo.id?inputRef:null}/>
            {todoEditingId===todo.id?(
              <button onClick={()=>handleSaveClick(todo)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"stroke='white' strokeWidth='1'  class="bi bi-save size-4" viewBox="0 0 20 16">
                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"/>
             </svg> 
              </button>
            ):(
              <button onClick={()=>handleEditClick(todo)} disabled={todo.status} className='text-slate-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"  className={`size-4 ${todo.status?'fill-gray-500':'fill-white'}`}>{/*edit button*/}
                  <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                </svg>
              </button>
            )}
            <button onClick={()=>dispatch(removeTodo(todo.id))} >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" stroke='white' strokeWidth='1' class="size-4">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
        </div>
    ))}
    </>
  )
}

export default Todos