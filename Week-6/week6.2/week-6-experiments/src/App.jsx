import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [todos, setTodos] = useState([]);

  //axios backend call syntax is slightly cleaner syntax than fetch backend call syntax


  //fetch backend call syntax
  // useEffect(()=> {
  //   fetch("https://sum-server.100xdevs.com/todos")
  //   .then(async function(res){
  //     const json = await res.json();
  //     setTodos(json.todos)
  //   })
  // }, [])


  //axios backend call syntax
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response){
      setTodos(response.data.todos) 
    })
  }, [])


  return <>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </>
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
