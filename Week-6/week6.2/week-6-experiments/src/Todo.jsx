import { useEffect, useState } from "react"
import axios from "axios"

function Main(){

    const [todoCount, setTodoCount] = useState(1);

    return <div>
        <button onClick={function(){
            setTodoCount(1)
        }}>1</button>
        <button onClick={function(){
            setTodoCount(2)
        }}>2</button>
        <button onClick={function(){
            setTodoCount(3)
        }}>3</button>
        <button onClick={function(){
            setTodoCount(4)
        }}>4</button>
        <Todo id={todoCount}></Todo>
    </div>
}

function Todo({id}){
    const [todo, setTodo] = useState({});

    //we have rendered Todo in Main and we are changing the todoId. this useEffect will run the first time it gets rendered bcz we doent provide any dependencies 
    //now we have provided dependency as id, now if todoId changes useEffect will re-render, if todoId changes i will rerender again
    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
        .then(function(response){
            setTodo((response.data.todo))
        })
    }, [id])    
    
    return <div>
        Id : {id}
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
    </div>

}

export default Main