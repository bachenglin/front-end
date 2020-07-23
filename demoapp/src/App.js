import React from 'react';
import { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import  FragmentDemo  from './components/FragmentDemo'
import PureComponent from './components/PureCom'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClassCounter from './components/HookCounter'
import HookCounter from './components/HookCounter';
// function App() {
//   return (
//     <div className="App">
//       <h3>
//         Hello World
//       </h3>
//     </div>
//   );
// }

class App extends Component{
  render(){
       return (
          <div className="App">
            <HookCounter></HookCounter>
            {/* <HoverCounter></HoverCounter> */}
          {/* <ClassCounter></ClassCounter> */}

          {/* <ClickCounter></ClickCounter> */}
            {/* <ClickCounter></ClickCounter> */}
            {/* <ParentComponent></ParentComponent> */}
            {/* <FragmentDemo></FragmentDemo> */}
            {/* {"<UserGreeting></UserGreeting>"} */}
          {/* <ParentComponent></ParentComponent> */}

            {/* // <EventBind></EventBind> */}
            {/* <Message></Message>
            <Counter></Counter> */}

            {/* <h3>
              Hello World from class
            </h3>
            <Greet name = "Clark" heroName = "Superman">
              <p>This is the children props</p>
            </Greet>
            <Greet name = "Bruce" heroName = "Batman">
              <button>Action</button>
            </Greet>
            <Greet name = "Diana" heroName = "spiderman"></Greet>

            <Welcome name = "Clark" heroName = "Superman"></Welcome>
            <p>This is the children props</p>
            <Welcome name = "Bruce" heroName = "Batman"></Welcome>
            <Welcome name = "Diana" heroName = "spiderman"></Welcome> */}
          </div>
        );

  }
}

export default App;
      

