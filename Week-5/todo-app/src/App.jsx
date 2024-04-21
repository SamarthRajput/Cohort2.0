import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Todo Application

//We cant define state like this, whenever you are defining state that react needs to watch, react wont know that it needs to re-render
//
// let state = [{
// }]


//todo State
//{
//    todos: [{title: "todo1", description: "First todo", completed: false}]
//}


function NotificationComponent(props){
  return <div>
    {/* way to wrire if else in jsx this NotificationComponent is used in Linkedin */}
    {props.notificationCount > 99 ? "99+" : props.notificationCount}
  </div>
}


//anytime a parent re-renders, its child rerenders as well
function App() {

  //State
  //whenever we want to Update the state we use this method to define the state
  // const [todos, setTodos] = useState([{
  //   title: "Go to GYM",
  //   description : "Go to gym from 7 to 9",
  //   completed: false
  // }, {
  //   title : "Study DSA",
  //   description : "Study DSA from 9 to 11",
  //   completed: true
  // }]);

  const[todos, setTodos] = useState([]);

  function AddTodo(){
    // //...todos it spreads all the original value here known as spread operator
    // // eg [1, 2]
    // //  [...todos, 3] = [1, 2, 3]

    //1st way to push new Todos
    // setTodos([...todos, {
    //   title: "new Todo",
    //   description: "desc of new Todo"
    // }])

    //2nd way to push new todos
    let newTodos = [];
    for(let i = 0; i<todos.length;i++){
      newTodos.push(todos[i]);
    }
    newTodos.push({
      title :"hello world",
      description: "hello hello"
    })

    setTodos(newTodos);
  }

  return (
    //Dumbest Way
    // <div>
    //   {JSON.stringify(todos)}
    // </div>

    //Simple Way
    //This is how we pass variables in curly braces
    //title = {todos[0].title}
    // <div>
    // <Todo title = {todos[0].title} description= {todos[0].description} ></Todo>
    // <Todo title = {todos[1].title} description= {todos[1].description} ></Todo>
    // </div>

    <div>
      <button onClick = {AddTodo}>Add a random Todo</button>

    {todos.map(function(todo) {
      return <Todo title = {todo.title} description = {todo.description} ></Todo> 
    })}
    <DarkTodo todos={todos}></DarkTodo>
    <dummyButton></dummyButton>
    </div>
  )
}


function DarkTodo(props){
  return <div>
  {props.todos.map(function(todo){
    return <div style={{background: "white", color: "black"}}> <Todo title = {todo.title} description = {todo.description}></Todo>
    </div>
  })}
  </div>
}
//dummyButton which takes no state variables as inputs literary nothing is a dummy button it will still re renders when the parent re renders 
function dummyButton(){
  console.log("re render dummy button");
  return <button></button>

}

//Component
//it will render a single todo
// Todo {
//   title,
//   description,
//   completed
// }
function Todo(props){
  return (
  <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      
  </div>
  )
}

export default App
