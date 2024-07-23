import { useEffect, useState } from "react";

function useInterval(fn, timeout){
    useEffect(() => {
        setInterval(() => {
            fn()
        }, timeout);
    }, [])
}

function Interval(){

    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(c => c + 1);
    }, 1000)


    return (
        <>
        Timer count is {count}
        </>
    )
}   

export default Interval;