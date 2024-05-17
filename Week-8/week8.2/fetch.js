//difference btw axios and fetch
//fetch that both the browser and nodejs natively provides us 
//Axios is an external library, thats make easy to send http requests


//we can use 2 syntax is fetch
//1st syntax -> .then syntax
function main(){
    //fetch returns a promise 
    fetch("https://sum-server.100xdevs.com/todos")
        .then(async response => {
            //convert this response to json 
            const json = await response.json();
            console.log(json.todos.length);
        })
}

//2nd syntax to do a fetch call -> async await syntax
async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json();
    console.log(json.todos.length);
}


main();