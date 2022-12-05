import React from 'react'
import { useState,useEffect } from 'react'



const UseEffect = () => {
    
   let [count,setcount]= useState(0)
   let [name,setName]= useState("hhh")
    useEffect(()=>{
        console.log("hello" + count)
    },[count,name])
  return (
    <div>useEffect

        <h1>{count}</h1>
        <h1>{name}</h1>
        <button onClick={()=>setcount(count +1)}>click</button>
        <button onClick={()=>setName(name ='nnn')}>name update</button>
    </div>
  )
}

export default UseEffect