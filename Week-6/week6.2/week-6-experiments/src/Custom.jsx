import { useEffect, useState } from "react";

//we can define our own customhook
//If we want to ever use a hook the function inside which it is defined either needs to be a hook or needs to be a component, we cannot create a raw function
function useTodos(){
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res){
            const json = await res.json();
            setTodos(json.todos)
        })
    }, [])

    return todos;
}

function Custom(){

    const todos = useTodos();

    {todos.map(todo => <Todo key={todo.id} title={todo.title} description = {todo.description} />)}
}

function Todo({title, description}){
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default Custom;