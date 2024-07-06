import React from 'react'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Income from './components/Income.jsx'
import Dashboard from './components/Dashboard.jsx'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <>
    <h1>nav bar and logo</h1>
    <Routes>
      <Route path ="/Signup" element={ <Signup />} />
      <Route path ="/login" element={ <Login />} />
      <Route path ="/Income" element={ <Income />} />
      <Route path ="/dashboard" element={ <Dashboard />} />
   
    
     </Routes>
    </>
  )
}

export default App