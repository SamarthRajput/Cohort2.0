import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Index from './index.jsx'
import Card from './Card.jsx'
import Hooks from './Hooks.jsx'
import Todo from './Todo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <Index></Index>
    <Card></Card>
    <Hooks></Hooks> */}
    <Todo></Todo>
  </React.StrictMode>,
)
