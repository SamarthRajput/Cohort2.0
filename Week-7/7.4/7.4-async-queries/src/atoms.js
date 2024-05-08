import axios from "axios";
import { atom, selector } from "recoil";

//Asynchronous data queries 
//this is how we would do asynchronous data queries and give an async value to a notifications Atom
//if we know ki the default value of an Atom, if we know that they have to asynchronously
//we will give our Atom a key and our default will be a selector and in selector the get function can be an asynchronous 
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        //this get can be asynchronous 
        get: async () => {
            //await new Promise(r => setTimeout(r, 5000)) // sleeps for 5s
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})