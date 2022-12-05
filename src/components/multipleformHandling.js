import React from 'react'
import { useState } from 'react'

function Multipleform() {
    let [data,setData]=useState({
        name:"",
        email:""
    })

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
      
        console.log(name,value)
        setData((prev)=>{
            return{
                ...prev,[name]:value
            }
        })
    }
  return (
    <div>
        <form>
            <label htmlFor="">name:</label>
            <input type="text" value={data.name} onChange={handleChange} name='' placeholder='name' />
            <br /><br />
            <label htmlFor="">email:</label>
            <input type="text" value={data.email} onChange={handleChange} email='' placeholder='email' />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Multipleform