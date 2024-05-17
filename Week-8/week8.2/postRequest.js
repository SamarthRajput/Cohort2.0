//Sending POST request in fetch vs axios
const axios = require("axios");

//Sending POST request using fetch syntax
async function main(){
    // by default in fetch the method is GET
    const response = await fetch("https://www.toptal.com/developers/postbin/1715943100672-8690154673531", {
        // method: "PUT",
        method : "POST",
        //sending some data using fetch
        body: {
            username: "harkirat",
            password: "123456"
        },
        //Sending headers in fetch
        headers: {
            "Authorization":"Bearer 123 "
        }
    });
    //as it returns the text
    const textualData = await response.text();
    console.log(textualData);
}

main();

//Sending POST request using axios syntax
async function main(){
    //in axios the second argumnet is the body and the third argument can have the headers 
    const response = await axios.post("https://www.toptal.com/developers/postbin/1715943100672-8690154673531", {
        username: "harkirat",
        password: "123456" 
    }, {
        headers: {
            "Authorization":"Bearer 123 "
        }
    });
    // const response = await axios.put("https://sum-server.100xdevs.com/todos");
    console.log(response.data);
}