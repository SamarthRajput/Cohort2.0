import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    // //Approach 1
    // //find() finds a specific value that follows these constraints, ki bhai giveen this id find todo which has this specific id
    // return TODOS.find(x => x.id === id)

    //Approach 2
    let foundTodo = null;
    for(let i = 0; i < TODOS.length; i++){
      if(TODOS[i].id === id){
        foundTodo = TODOS[i]
      }
    }
    return foundTodo
  },
});