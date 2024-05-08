import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

//Why do you use the Context API
//to make rendering more performent (the ans is NO), this is not why you use the context API
//To make syntax cleaner/ get rid of prop driling (the ans is YES), this is why we use context API
//Recoil lets us do both of the things

function App() {
  // const [count, setCount] = useState(0);
  //useRecoilState this is exactly the same as useState() which basically means it gives us 2 things
  //1.The current value 
  //2. How to update the current value 
  //useRecoilValue which basically gives you just the value eg:count
  //useSetRecoilValue this will gives us the second one, ki if you only want to update the variable and not actually get the value

  return (
    <div>
      {/* Anything that uses a recoil logic needs to be wrapped inside RecoilRoot */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  //The ugly syntax of rendering
  // const count = useRecoilValue(countAtom);
  // return <div>
  //   {(count % 2 == 0) ? "It is even" : null}
  // </div>


  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  //Three ways/syntax to set state
  //1. setCount(count + 1)
  //2. setCount(count => count + 1) -> get the current value and return the updated value given the current value 
  // 3.setCount(function(count){
  //   return count + 1
  // })

  return <div>
    <button onClick={() => {
      // setcount only needs to set the count value, doesnot need the value, it will automatically get the value whenever seCount function gets called
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
