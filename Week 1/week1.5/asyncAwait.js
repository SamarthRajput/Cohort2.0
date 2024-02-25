function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        //do some async logic here
        setTimeout(function(){
            resolve("hi there")
        }, 1000);
    });
    return p;
}

//we cannot put await at the very top lvl every await needs to be wrapped inside async which is why i had to write async function main() and then call main()
async function main(){
    //no callbacks , no .then syntax
    let value = await kiratsAsyncFunction();
    console.log(value);
}

main();
