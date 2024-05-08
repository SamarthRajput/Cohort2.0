//TODO APP
import { useState } from "react"

let counter = 4;

function Index(){

    const [todos, setTodos] = useState([{
        id: 1,
        title: "Go to gym",
        description: "Go to gym from 7 to 9"
    } , {
        id: 2,
        title: "Study OS",
        description: "Study OS from 9 to 10"
    } , {
        id: 3,
        title: "Study 100xDevs",
        description : "Thanks to Harkirat Singh"
    }]);

    function addTodo(){
        // 1st syntax update the state variable and add another todo at the end -> using Spread syntax
        setTodos([...todos, {
            id: counter++,
            title: Math.random(),
            description: Math.random()
        }])

        // // 2nd syntax of doing it 
        // const newTodos = [];
        // for(let i = 0; i<todos.length; i++){
        //     //pushing all the todos into the new todos array
        //     newTodos.push(todos[i]);
        // }
        // //Here newTodos == todos
        // //and then push a new todo in the new todos array
        // newTodos.push({
        //     id: 4,
        //     title:Math.random(),
        //     description: Math.random()
        // })
        // //Here existing ones + 1 todo
        // setTodos(newTodos);


    }


    return(

        <div>
            {/* Whenever we are rendering an array in react to make sure React knows ki han bhai this was the 1st todo,this was the 2nd todo and so on   */}
            {/* key={todo.id} which is the way to uniquely identify a todo  */}
            {/* The purpose of providing key here is that the react library whenever it is trying to calculate dips it gets really complicated for it to understand acha what has changed unless you prvoide id */}


            {/* 1st Syntax to render all the Todos */}
            {/* {todos.map(todo => <Todo key={todo.id} title={title} description={description}></Todo>)} */}

            <button onClick={addTodo}>Add a Todo</button>
            {/* 2nd Syntax to render all the Todos, This is comfortable */}
            {todos.map(function(todo){
               return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
            })}
           
            {/* 3rd Syntax to render all the Todos
            <Todo key={todos[0].id} title={todos[0].title} description={todos[0].description}></Todo>
            <Todo title={todos[1].title} description={todos[1].description}></Todo>
            <Todo title={todos[2].title} description={todos[2].description}></Todo> */}
        </div>

    )

}
 

function Todo({title, description}){
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}



export default Index