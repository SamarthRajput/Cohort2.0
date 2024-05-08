import { useEffect } from "react"

//Mount means when our component firstly gets put 
//Now the component could rerender a 100 times then the life cycle event to mount should not run
//Unmounted means when our component gets removed   

function Hooks(){
    //useEffect is a lifecycle Hook, it let us do a lifecycle event
    //when this component Mounts give an alert
    //Writing this syntax in our functional Component it is similar to in our class based component 
    //useEffect has 2 parts :- First one is the function and 
    //second is Dependency array which basically means when should this function run, and if we give it an empty array it means it should run on the first mount
    useEffect(function (){
        alert("Hi"); 
    }, []);

    return <div>
        Hi there
    </div>
}

// //The way to know that the component has mounted in class based component was this syntax 
// class Hooks{
//     componentDidMount(){
//         alert("Hi");
//     }
// }


export default Hooks