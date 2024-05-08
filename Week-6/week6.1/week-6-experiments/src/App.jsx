import React, { useState } from "react"

function App() {
  //We are trying to push the state down so our parent component doesnot have any state variables because if it has a state variable and if the state variable changes it rerenders, all childrens will rerender
  return (

    //we can also write React.Fragment here instead of empty tag or div
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Harkirat2"></Header>
    </div>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is harkirat");

  function updateTitle(){
    setTitle("My name is" + Math.random());
  }

    return <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
    </div>
}

//This syntax is object destructing, slightly cleaner syntax ki we destructure props into a title variable and then render it directly
// function Header({title}){
//   return <div>
//     {title} 
//   </div>
// }
    //OR
//2nd Syntax
// function Header(props){
//   return <div>
//     {props.title}
//   </div>
// }

//Using React.memo to minimize the number of rerenders 
const Header = React.memo(function Header({title}){
  return <div>
    {title} 
  </div>
})


export default App
