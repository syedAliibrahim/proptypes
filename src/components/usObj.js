import React from 'react'
import { useState } from 'react'
import usArray from './usArray'

function UsObj() {
    const obj ={
        name:"ali",
        age:25,
        height:5.77,
        isYoung:true,
    }
    const[person,setPerson]= useState(obj)
    // let changeState=()=>{
    //     setPerson({
    //         name:"salman",
    //     })
    // }

    let changeState=()=>{
    setPerson(previousState =>{
        return {
            ...previousState,
            name:"abbou",
        }
    });
}
  return (
    <div><h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h2>{person.height}</h2>
    <button onClick={changeState}>change</button>
    <usArray/>
    </div>

  )
}

export default UsObj;