import { useState } from 'react'    //hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//for dynamic website we have to define state , components

function App() {
  //State
  const [count, setCount] = useState(0);

  //ReRendering
  return (
    // <div>
    //   {/* whenever you want to write any javaScript or render a javaScript variable inside a react component
    //   you have to put inside curly braces */}
    //   <button onClick={onClickHandler}>Counter {count}</button>
    // </div>
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

//Component which takes some States as an input and renders Counter whatever props gets as an input 
//we have put all our onclick logic here
function CustomButton(props) {

  function onClickHandler(){
    //count = count + 1;      This is not the right way to set State variable if you are using the react state 
    //The right way is 
    props.setCount(props.count + 1);
  }

  return (
      <button onClick={onClickHandler}>Counter {props.count}</button>
  )
}

export default App
