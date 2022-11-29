import React from 'react'
import Student from './student';
function App() {
    // const Students=["jk","fff","okok","kk"];
    // let studentName = Students.map((std,index)=> <li key={index}>{std}</li>);
    // const num =[1,2,4,5,]
    // const result =  num.map(nu=> <h1>{ nu = nu * 2 }</h1>)


    const Students =[
        {
            id:1,
            name:"ali",
            age:25,
        },
        {
            id:2,
            name:"lkali",
            age:25,
        },
        {
            id:3,
            name:"muuiali",
            age:25,
        }
    ]


    return (
      <div>

 {/* {<ul>{studentName}</ul>} */}

        {/* {Students.map(std=> <h1>I am {std.name} and I am {std.age} years old</h1>)} */}
        {Students.map(std=> <Student key={std.id} std={std}/>)}
        {/* {result} */}
        {/* {Students.map(std=> <h1>{std}</h1>)} */}
        {/* {num.map(nu=> <h1>{ nu = nu * 2 }</h1>)} */}
      </div>
    )
  }
  export default App;