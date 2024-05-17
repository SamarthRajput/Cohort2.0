const axios = require("axios");

async function main(){
    //in axios the second argumnet is the body and the third argument can have the headers 
    const response = await axios.get("https://httpdump.app/dumps/7bfc5524-2f3e-474d-aa85-9593db6c53a5?a=b", {
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

main();


//if we are sending a POST request then the first argument is the url that you are sending the request to, second argument is our body and the third argument will contain your headers 
//if we are sending a GET request, we cannot send any request body in a get request, we can send the query parameters if need be, in get request our headers will be the second argument    


//2nd syntax in axios using axios only

async function main(){
    const response = await axios(
        {
            url: "https://httpdump.app/dumps/7bfc5524-2f3e-474d-aa85-9593db6c53a5?a=b",
            method: "POST",
            headers:{
                Authorization: "Bearer 123"
            },
            data: {
                username: "harkirat"
            }
        }
    );
    console.log(response.data );
}