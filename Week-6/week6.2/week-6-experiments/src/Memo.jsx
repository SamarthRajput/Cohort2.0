import { useEffect, useMemo, useState } from "react"

//Given an input we store the output somewhere so that it isnt recomputed for the same input  
//useMemo the name itself memoization, across renders if we want to remember a value then use useMemo() 
function Memo(){

    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    // //Approach-2
    // const [count, setCount] = useState(0);

    //Approach-1 Using useMemo()
    //In useMemo() the first argument is the function that needs to run only when inputValue changes very close to useEffect
    //If we know count is dependent on inputValue
    let count = useMemo(() => {
        let count = 0;
        for(let i = 1; i <= inputValue ;i++ ){
            count = count + i;
        }
        return count;
    }, [inputValue])


    // //Approach-2 Using useEffect()
    // //In this approach 2 rerenders will happen
    // useEffect(()=>{
    //     let finalCount = 0;
    //     for(let i = 0; i <= inputValue; i++){
    //         finalCount = finalCount + i;
    //     }
    //     setCount(finalCount);

    // }, [inputValue])    


    return <div>
        <input type="text" name="" id="" onChange={function(e){
            //In the state variable we stored the number that the user has put  
            //e.target is the actual reference to this input DOM element 
            //e.target.value gives us the actual value inside the input box 
            setInputValue(e.target.value);
        }} placeholder="Sum from 1 to n " />
        <br />
        Sum from 1 to {inputValue} is {count}
        <br />
        <button onClick={()=>{
            setCounter(counter+1)
        }}>Counter ({counter})</button>
    </div>

}


export default Memo