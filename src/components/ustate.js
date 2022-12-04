import React, {useState} from 'react'
import UsObj from './usObj'

function Ustate  (){
    const [name,setName] = useState()
    let changeState =()=> {
      setName("kak")
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changeState}>Update</button>
        <br></br>
        <UsObj/>
    </div>
  )
}

export default Ustate;