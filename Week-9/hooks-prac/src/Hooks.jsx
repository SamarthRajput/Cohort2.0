import { useEffect, useState } from "react";

function useIsOnlineHook(){
    //whether the user is currently online or not 
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    //inside a useEffect so that it only happens once, I will put some logic
    useEffect(()=> {
        window.addEventListener("online", () => {
            setIsOnline(true);
        })
        
        window.addEventListener("offline", () => {
            setIsOnline(false);
        })
    } , [])

    return isOnline;
}

function Hooks(){

    const isOnline = useIsOnlineHook();
    if(isOnline){
        return "You are Online yay!"
    }

    return "You are offline, please connect to the internet"

}

export default Hooks;