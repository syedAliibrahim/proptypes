import React from 'react'
import Student from './student';
function App() {
    const Students=["jk","fff","okok","kk"];
    let studentName = Students.map(std=><li>{std}</li>);
    // const num =[1,2,4,5,]
    // const result =  num.map(nu=> <h1>{ nu = nu * 2 }</h1>)


    // const Students =[
    //     {
    //         name:"ali",
    //         age:25,
    //     },
    //     {
    //         name:"lkali",
    //         age:25,
    //     },
    //     {
    //         name:"muuiali",
    //         age:25,
    //     }
    // ]


    return (
      <div>
        {/* {Students.map(std=> <h1>I am {std.name} and I am {std.age} years old</h1>)} */}
        {/* {Students.map(std=> <Student std={std}/>)} */}
        {/* {result} */}
        {Students.map(std=> <h1>{std}</h1>)}
        {/* {num.map(nu=> <h1>{ nu = nu * 2 }</h1>)} */}
      </div>
    )
  }
  export default App;