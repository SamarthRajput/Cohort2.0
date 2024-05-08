import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //State is the dynamic set of things on our website.
  //useState() is a hook that gives us back a count variable which is our state variable, and setCount that lets you set this count state variable 
  const [count, setCount] = useState(0)

  return (
    <>
    <button onClick={function(){
      setCount(count + 1);
    }}>Counter {count}</button>
    </>
  )
}

export default App
