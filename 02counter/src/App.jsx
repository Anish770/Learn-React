import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
function App() {
  let [counter,setCounter]=useState(15)
  // let counter=5

  const addValue=()=>{
    setCounter (counter=>counter+1)
    setCounter (counter=>counter+1)
    setCounter (counter=>counter+1)
    setCounter (counter=>counter+1)
    console.log('value added',counter);
    // counter=counter+1
  }
  const removeValue=()=>{
    if(counter-1>=0)
      {
        setCounter(--counter)
      }
    console.log('value removed',counter);
  }
  return (
    <>
    <h1>Anish here {counter}</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
