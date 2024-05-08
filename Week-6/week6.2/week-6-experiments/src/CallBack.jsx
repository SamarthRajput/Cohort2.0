import { memo, useCallback, useState } from "react"


function CallBack(){
    const [counter, setCounter] = useState(0);

    //useCallback is used to stop unnecessary rerenders
    //if define an object or a function it will rerender unless you wrap it inside a useCallback

    //it is a native function
    //to prevent this rerendering of the child when the logSomething() function hasn't changed we be like logSomething is not a function it is a const variable which is a function wrappped inside a useCallback 
    //ki bhai now this is a function wrapped inside a useCallback and only if something in dependency array changes will be consider this logSomething function to change else we will be like this function is same across renders
    const logSomething = useCallback(()=>{
        console.log("child clicked") 
    }, [])

    return <div>
        <ButtonComponent inputFunction={logSomething}/>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>Counter ({counter})</button>

    </div>
}

//Child Component which does nothing, renders a div and when we click on the Button it calls onClick function, that it receives as an input
//We can pass function as props, we can pass values as props
//memo lets you skip re-rendering a component when its props are unchanged 
//if there is a parent component which has a child component if the parent rerenders the child will 100% rerender even if the state variables inputs to the child havent changed until we wrap the child inside a memo
//then child will only rerender if its inputs get changed
const ButtonComponent = memo(({logSomething}) => {
    console.log("child render")
 
    return <div>
        <button> Button Clicked</button>
    </div>
})

export default CallBack