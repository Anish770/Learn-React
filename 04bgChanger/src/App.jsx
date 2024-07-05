import { useState } from 'react'


function App() {
  const [color, setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-evenly gap-3 shadow-lg bg-black px-5 py-3 rounded-full">
          <button onClick={()=>setColor("red")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'red'} }>red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'green'}}>green</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'yellow'}}>yellow</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'pink'}}>pink</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'blue'}}>blue</button>
          <button onClick={()=>setColor("maroon")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'maroon'}}>maroon</button>
          <button onClick={()=>setColor("teal")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'teal'}}>teal</button>
          <button onClick={()=>setColor("aqua")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'aqua'}}>aqua</button>
          <button onClick={()=>setColor("orange")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'orange'}}>orange</button>
          <button onClick={()=>setColor("silver")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'silver'}}>silver</button>
          <button onClick={()=>setColor("lime")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'lime'}}>lime</button>
          <button onClick={()=>setColor("Khaki")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'Khaki'}}>Khaki</button>
          <button onClick={()=>setColor("Turquoise")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'Turquoise'}}>Turquoise</button>
          <button onClick={()=>setColor("LightCoral")} className='outline-none px-6 py-2 rounded-full text-white'style={{backgroundColor:'LightCoral'}}>LightCoral</button>
        </div>
      </div>
    </div>
  )
}

export default App
