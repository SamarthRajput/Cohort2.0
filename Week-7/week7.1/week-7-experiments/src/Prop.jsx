import { useContext, useState } from "react"
import { CountContext } from "./context";

//Context API lets you 1. teleport state directly
//2. lets you keep all state logic outside of your core react component 

//Using Context API 
//1. Create an object that lets you teleport the count state
//2. wrap anyone that wants to use the teleported value inside a provider  <CountContext.Provider /> and give this guy a prop

function Prop(){

    const [count, setCount] = useState(0);

    return <div>
        <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
       </CountContext.Provider>
    </div>

}

function Count({setCount}){ 
    return <div>
        <CountRenderer ></CountRenderer>
        <Buttons setCount={setCount}></Buttons>
    </div>
}

function CountRenderer(){
    const count = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function Buttons({setCount}){
    const count = useContext(CountContext);
    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1)
        }} >Decrease</button>
    </div>
}

export default Prop