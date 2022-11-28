import React from 'react'

function home(props) {
  return (
    <div><h1>{props.name}</h1>
    <h2>{props.age}</h2>
    </div>
  )
}

export default home