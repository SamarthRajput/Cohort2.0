import { atom, selector } from "recoil";

//atom({}) takes 2 inputs
//1. A key to uniquely indentify the atom
//2. A default value 
export const networkAtom = atom({
    key : "networkAtom",
    default: 104
});

export const jobsAtom = atom({
    key : "jobsAtom",
    default: 0
});

export const notificationsAtom = atom({
    key : "notificationsAtom",
    default: 12
});

export const messagingAtom = atom({
    key : "messagingAtom",
    default: 0
});

// selector({}) which will take 2 keys, Selector is derived from other atoms 
//1. key which the key for this specific selector
//2. value ki bhai how would you get this specific selector, how does this depend on other atoms
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get : ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount ;
    }
})