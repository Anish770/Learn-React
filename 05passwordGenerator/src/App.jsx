import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [number,setNumber] = useState(false)
  const [character,setCharacter] = useState(false)
  const [password,setPassword] = useState("")
  const [copystatus,setCopystatus] = useState("copy")

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(character) str+="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    for( let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      console.log(pass);
    }
    setPassword(pass)
    setCopystatus("copy")
  },[length,number,character,setPassword])

    const copyPasstoClipboard=useCallback(()=>{
      setCopystatus("copied!")
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

useEffect(()=>{passwordGenerator()},[length,number,character,passwordGenerator])

  return (
    <>
    <div className="container flex flex-wrap">
    <div className="main content mx-auto bg-black text-white p-9 rounded-3xl">
    <h1 className='text-3xl mb-5 font-semibold '>Password Generator</h1>
      <div className="input mx-auto p-3 flex flex-wrap justify-center mb-5">
        <input className="rounded-l-lg text-black p-2" type="text" value={password} readOnly ref={passwordRef}/>
        <div className="group">
        <button className=" bg-blue-400 p-2 rounded-r-lg transition-colors duration-300 ease-in-out
        group-hover:bg-amber-100 group-hover:text-black group-hover:tracking-wide" onClick={copyPasstoClipboard}>{copystatus}</button>
        </div>
      </div>

      <div className="options flex flex-wrap justify-center gap-4">
        <input type="range" id='len'min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="len">Length: {length}</label>
        <div><input type="checkbox" id="num" onChange={(e)=>{setNumber((number)=>!number)}}/>
        <label htmlFor="num">Number</label>
        </div>
       <div><input type="checkbox" id="char" onChange={(e)=>{setCharacter((character)=>!character)}}/>
        <label htmlFor="char">Character</label>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
