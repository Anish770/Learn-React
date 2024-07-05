import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObject={
    name:'anish',
    age: 21
  }
  let myArr=[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-full ' >Tailwind test</h1>
     <Card username='Isabella' btnText='Visit Me'/>
     <Card username='Anish' />
    </>
  )
}

export default App
