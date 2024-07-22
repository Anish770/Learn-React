import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Anish770')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center bg-slate-950 text-md text-white py-4 flex flex-col justify-center items-center font-semibold text-xl'>Github followers : {data.name}
    <img src={data.avatar_url} alt="user_img" className='w-48 h-48 rounded-full'/></div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
   const res= await fetch('https://api.github.com/users/Anish770')
   return res.json()
}