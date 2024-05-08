import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});


//A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state   
//basically in get function we have the access of various atoms and can return the a state which depends on these atoms by doing some logic
export const evenSelector = selector({
    key: "evenSelector",
    //the key is get which is a function and the function has argument called get inside which you pass the Atom that evenSelector derives from.
    //evenSelector depends on count
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2 == 0;
    }
});

// Todo creation application with filtering logic
// todos, filter

// 2 input boxes (title, description)
// button
// todos => atom
// filter (gym) => atom
// selector (the current set of todos)


// export const filteredTodos = selector({
//     key: "filteredTodos",
//     get: ({get}) => {
//         const todos = get(todosAtom);
//         const filter = get(filterAtom);
//         return todos.filter(x => x.title.includes(filter) || x.description.includes(filter));
//     }
// });