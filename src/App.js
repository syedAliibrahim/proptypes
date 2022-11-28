// import logo from './logo.svg';
import './App.css';
import Props from './components/props';
import Home from './components/home';
import Header from './components/header';
import Customer from './components/customer';

function App() {
  // let a = "abuzzzz"
  return (
    <div className="App">
   {/* <Props name="ali" age={25}/>
   <Home name={a} age={44}/>
   <Header name="kljkk" age={111} /> */}
   <Customer name="ali" age={22}/>
    </div>
  );
}

export default App;
