import { atom } from "recoil";
//atom expect a single argument as an input which is an object and this requires a bunch of keys to pass
//1. key basically means a unique way to identify this atom 
//2. default value hich is what do you want the default value of this specific atom to be 

//We have seperately defined our state, our main project App.jsx doesnot need useState variable, does not need useContext we can get rid of everything  

export const countAtom = atom({
    key: "countAtom",
    default: 0
});
