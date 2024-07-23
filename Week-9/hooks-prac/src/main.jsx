import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LifeCycle from './LifeCycle.jsx'
import CustomHook from './CustomHook.jsx'
import Hooks from './Hooks.jsx'
import MousePointer from './Mouse.jsx'
import Interval from './Interval.jsx'
import SearchBar from './SearchBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <LifeCycle  /> */}
        {/* <CustomHook  /> */}
        {/* <Hooks /> */}
        {/* <MousePointer  /> */}
        {/* <Interval  /> */}
        <SearchBar  />
    </React.StrictMode>,
)
