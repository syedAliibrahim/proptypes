import React from 'react'
import { useState } from 'react'

function FormHandling() {

    const [name,setName ] = useState("")
    const handleSub =(e)=>{
        e.preventDefault()
        console.log(e.target[0].value);
    }
  return (
    <div>
        <form onSubmit={handleSub}>
    <label htmlFor="">
    Name:
    </label>
    <input type="text" name={name} onChange={(e,n)=>setName(e.target.value.toLowerCase())}/>
    <br />
    <input type="submit" value="Submit" />
     </form>
    </div>
  )
}

export default FormHandling