import React from 'react'

function student({std}) {
  return (
    <div>
        <h1>I am {std.name} and I am {std.age} years old</h1>
    </div>
  )
}

export default student