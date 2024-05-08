import { useEffect, useState } from "react"

function Todo(){

 const [todos, setTodos] = useState([]);

useEffect(()=> {
    setInterval(()=>{
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res)=> {
            const json = await res.json();
            setTodos(json.todos);
        })
    }, 10000)
} , [])


return <div>
    {todos.map(function(todo){
       return <TodoComponent key={todo.id} title={todo.title} description={todo.description}></TodoComponent>
    })}
</div>
}

function TodoComponent({title, description}){
    return(<div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>)
}

export default Todo