import { useState,useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContextProvider } from './contexts/index'

function App() {
  const [todos,setTodos]=useState([])
  const addTodo=(todo)=>{
     setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ?{...prevTodo,completed: !prevTodo.completed}:prevTodo))
  }
  useEffect(()=>{
    let todos=JSON.parse(localStorage.getItem("todos"))||[]
    if(todos&&todos.length>0)
    {
      setTodos(todos) 
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172482] min-h-screen py-8">
      <div className="max-w-2xl mx-auto rounded-lg shadow-xl px-4 py-3">
      <h1 className='text-2xl font-bold text-center mb-8 rounded-lg text-white px-4 py-3 '>Manage Your Todos</h1>
      <div className="mb-4 ">
        <TodoForm/>
      </div>
      <div className="">
        {todos.map((todo)=>(
          <div key={todo.id} className="w-full mb-2">
            <TodoItem todo={todo}/>
          </div>
        ))}
      </div>
      </div>
    </div>
    </TodoContextProvider>
  )
}

export default App
