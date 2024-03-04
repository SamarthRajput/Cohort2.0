function asyncAwaitfn(){
    const p = new Promise(function(resolve){
        //setTimeout(resolve , 1000);   //1st way
        setTimeout(function(){
            resolve();
        } , 1000);
    });
    return p;
}

async function main(){
    let ans = await asyncAwaitfn();
    console.log(ans);
}

main();