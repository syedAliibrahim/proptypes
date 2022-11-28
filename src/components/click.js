import React from 'react'


function click(){
let Hello =(name) =>{
    alert("Hello" + name)
}

  return (
    <div className='App'>
        <input type="button" value="click" onClick={()=>Hello("ali")} />
    </div>
  )
}

export default click