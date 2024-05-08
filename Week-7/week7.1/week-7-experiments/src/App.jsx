import React, { Suspense, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dash'
const Dashboard = React.lazy(() => import("./components/Dash"))
// import { Landing } from './components/Landing'
const Landing = React.lazy(() => import("./components/Landing"))


//If we are doing Client Side Routing, if we change the page you get no HTML from the backend no javascript from the backend
//but there is reloading happening, we are still refreshing the page, we are still bringing HTML again from the backend because we have used window.location.href way to route from one page to another
//This is not the right way to go from one page to another if we are using client side routing\


function App() {
  
  //Suspense API which is used for, cases like these -> asynchronous component fetching, asynchronous data fetching
  return (
    <div>
      {/* the topbar remains constant but the content below topbar changes */}
      
    {/* First wrap everything inside BrowserRouter, then Routes, and then all our routes */}
    <BrowserRouter>
    <Appbar />
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>}  />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

function Appbar(){ 
  //useNavigate hook expect that when we are using it, make sure we are using it in a component thats inside BrowserRouter 
  //We cannot invoke this useNavigate hook outside BrowserRouter, this hook can only be invoked in a component that is inside BrowserRouter, not in a component that is outside BrowserRouter
  const navigate = useNavigate();
  return <div>
    <div>
        <button onClick={()=>{
          // this global location object is something you have access to in HTML inside our DOM
          // window.location.href = "/";
          navigate("/");
        }}>Landing</button>

        <button onClick={()=>{
          // window.location.href = "/dashboard";
          navigate("/dashboard");
        }}>Dashboard</button>

      </div>
  </div>
}

export default App
