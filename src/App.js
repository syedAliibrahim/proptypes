// import logo from './logo.svg';
import { createContext } from 'react';
import './App.css';
// import Props from './components/props';
// import Home from './components/home';
// import Header from './components/header';
// import Customer from './components/customer';
// import Click from './components/click';
// import Comp1 from './components/comp1';
// import Comp2 from './components/comp2';
// import Array from './components/array'
// import Ustate from './components/ustate';
// import UseEffect from './components/useEffect';
import Compo1 from './components/Compo1';
import FormHandling from './components/FormHandling';

// function App() {
//   // let a = "abuzzzz"
//   return (
//     <div className="App">
//    {/* <Props name="ali" age={25}/>
//    <Home name={a} age={44}/>
//    <Header name="kljkk" age={111} /> */}
//    {/* <Customer name="ali" age={22}/> */}
//    {/* <Click/> */}

//     </div>
//   );
// }

// export default App;


//  function App() {
//   const name = "ali";
//    if ( name == "ali"){
//     return <Comp1/>
//    }
//    else{
//     return <Comp2/>
//    }
//   }

///element vrivablr
// function App() {
  // const name ="salma";
  // let data;
  // if ( name === "salma"){
  //       data = <Comp1/>
  //      }
  //      else{
  //       data = <Comp2/>
  //      }
//   const age =17;
//   let name= "ali";
//        return (
//         <div>
//           {age >= 18? <h1>you can vote</h1> : <h2>you cant vote</h2>}
//           {name === "ali"? <Comp1/> : <Comp2/>}
//         </div>
//        )
// }

export const NameContext =createContext()
function App() {

  return (
    <div>
     {/* <Ustate /> */}
     {/* <UseEffect/> */}

     {/* <NameContext .Provider value={'asasa'}>
     <Compo1/>
     </NameContext.Provider> */}
    <FormHandling/>
    </div>
  )
}
export default App;