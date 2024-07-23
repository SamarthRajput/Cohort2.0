import { useEffect, useState } from 'react'
import axios from 'axios'

//Data fetching Hook a hook that we can create that actually fetches the data from the backend and stores it in a single variable.
//It is good bcz
//1. it is much cleaner
//2. if this logic ever changes you donot have to change that logic in multiple places 
//Encapsulate of the logic in a single hook and who ever wanted to use that hook can use it.

//A hook is effectively a function 
//Custom hook called useTodos()
//anyone who wants to get the list of todos from the backend
function useTodos(n){
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const value = setInterval(() => {
            axios.get("https://sum-server.100xdevs.com/todos")
              .then(res => {
                setTodos(res.data.todos);
                setLoading(false);
            })
        }, n * 1000)

        axios.get("https://sum-server.100xdevs.com/todos")
              .then(res => {
                setTodos(res.data.todos);
                setLoading(false);
        })
        //we should have n as a dependency thats the first problem
        //2nd problem is if n changes, we need to make sure ki han bhai, I start a new interval for the new n but i need to stop the interval for the old n 
        //if anytime n changes first this logic will run which needs to clear the original clock, it needs to make sure the clock that was running is stopped and then the new clock starts
        //we dont want 2 clocks running
        //cleanup logic to stop the old clock  
        return () => {
            clearInterval(value);
        }
    }, [n])

    //we are only returning todos , we are not returning [todos, setTodos] bcz we know who ever wants to use it then only the final value they dont ever want to update 
    //changing hook so that it can return 2 things 
    //the loading variable should represent whether or not this backend call has succedded, if it has succedded loading should become false, 
    //if it is still in progress loading should be true 
    return {todos, loading};
}


function CustomHook(){

    const {todos, loading} = useTodos(5);

    if(loading){
        return <div> loading... </div>
    }

    return (
    <>
        {todos.map(todo => <Track todo={todo} />)}
    </>
    )

}

function Track({ todo }) {
    return <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
}

export default CustomHook;