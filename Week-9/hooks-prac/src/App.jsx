import { useState} from 'react'
//importing react globally at the top
import React from 'react';
import './App.css'

function App() {

  return (
    <>
      <MyComponent></MyComponent>
    </>
  )
}

//Functional Component
// function MyComponent() {
//   //it initialises a state variable using the useState() hook and then renders the count and any time a button is clicked the count gets increased
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       {/* we have to just give the function signature, we dont have to call the function */}
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }


//Class Based Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}


export default App
