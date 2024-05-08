import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './Todo.jsx'
import Todo from './Todo.jsx'
import Memo from './Memo.jsx'
import CallBack from './CallBack.jsx'
import Custom from './Custom.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
   {/* <Main></Main> */}
   {/* <Memo></Memo> */}
   {/* <CallBack></CallBack> */}
   <Custom></Custom>
  </React.StrictMode>,
)
