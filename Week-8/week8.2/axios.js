const axios = require("axios");

//backend call using axios library
//syntax 
async function main(){
    //if we are sending a get request then axios.get() 
    //if we sending a post request then axios.post()
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    //whenever you are using axios, you will get access to the final thing in response.data
    console.log(response.data.todos.length);
}

main();