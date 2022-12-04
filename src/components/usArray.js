import React from 'react'
import { useState } from 'react';

const Usarray = () => {
    let num=[2,3,4,5,6,7,8,9,];
    let [number, setNumber]=useState(num);
    let changeList=()=>{
        // setNumber([55,77,8,9,64,41,])
        setNumber(previousState =>{
            return[
                ...previousState,
                78,55,455,
            ]
        })
    }
  return (
    <div>
        <ul>
            {number.map((e,n)=>
            <li key={n}>{e}</li>)}
        </ul>
        <button onClick={changeList}>change list</button>
    </div>
  )
}

export default Usarray;