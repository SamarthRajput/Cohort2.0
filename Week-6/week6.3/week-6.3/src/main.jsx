import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Data from './UseEffect.jsx'
import Memo from './UseMemo.jsx'
import CallBack from './UseCallback.jsx'
import UseRef from './UseRef.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Data></Data> */}
    {/* <Memo></Memo> */}
    {/* <CallBack></CallBack> */}
    <UseRef></UseRef>
  </React.StrictMode>,
)
