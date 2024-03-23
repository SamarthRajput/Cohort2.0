import { useState } from 'react'
import './App.css'

//jsx file supports HTML there is a combination of javascript and HTML
//and inside jsx you can actually return some HTML from a function

//dynamic websites
//when u have to create dynamic websites, you write a lot of JS code that does DOM manipulation

function App() {
  const [count, setCount] = useState(0)

  // useEffect => used to connect this to a backend

  return (
    <div>
        {/* react expects ki you give it the function signature dont actually call it  */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default App
