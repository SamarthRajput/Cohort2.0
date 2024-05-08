import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  //we have to create atoms dynamically, 
  //if 2 todos have the same id they need to hit the same atom they need to get the value from the same atom,
  //if 2 todos have different id is when we have to create a fresh atom for them

  //we need to pass in the input ki bhai this is a family and i want which atom from them, i want a todo with this specific id
   const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  )
}

export default App
