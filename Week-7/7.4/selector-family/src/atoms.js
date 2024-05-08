import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

//this syntax is written in production
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    //here a function returns a function
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});

//Easier syntax
// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: selectorFamily({
//     key: "todoSelectorFamily",
//     get: function (id){
//       return async function ({get}) {
//       const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
//       return res.data.todo;
//     }
//     }
//   })
// });