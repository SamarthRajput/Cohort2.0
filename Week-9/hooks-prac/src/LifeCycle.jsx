import './App.css'
import React, { useState, useEffect } from 'react';

function LifeCycle(){

    const [render, setRender] = useState(true);

    //Put useEffect at the top which runs once and after every 5seconds let me set render to the opposite of it.
    useEffect(() => {
        setInterval(() => {
            //r => !r this will take the current value and set it to the opposite of it
            setRender(r => !r);
        }, 5000)
    } , []);

    return (
        <>
            {/* we are just making sure this MyComponent unmounts, this goes away from the DOM after 5-10s 
            ans here i can conditionally render MyComponent, I can be like if render is true then do render this component
            else render an empty div  */}   

            {render ? <MyComponent /> : <div></div> }
        </>
    )

}


//Functional Component
//useEffect hook lets you hook into lifecycle events 
// function MyComponent() {
//     //we are able to run some code when the component renders for the first time
//     useEffect(() => {
//       // Perform setup or data fetching here
//       console.error("Component mounted");
  
//       //You always just return a function from a useEffect dont return any other value 
//       //You can return a function from a useEffect which runs whenever the dependencies changes 
//       //this code will run if the dependency have changed or the component unmounts
//       return () => {
//         // Cleanup code (similar to componentWillUnmount)
//         console.log("component unmounted"); 
//       };
//     }, []);
  
//     // Render UI
//     return <div>
//         From inside my component 
//     </div>
// }


//Class Based Component
class MyComponent extends React.Component {
    componentDidMount() {
      // Perform setup or data fetching here
      console.log("component mounted");
    }
  
    componentWillUnmount() {
      // Clean up (e.g., remove event listeners or cancel subscriptions)
      console.log("component unmounted");
    }
  
    render() {
      // Render UI 
      return <div>hi there</div>
    }
  }

export default LifeCycle