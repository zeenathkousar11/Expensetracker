import React from 'react'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'
import Dashboaard from './components/Dashboard.jsx'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <>
    <h1>nav bar and logo</h1>
    <Routes>
      <Route path ="/Signup" element={ <Signup />} />
      <Route path ="/login" element={ <Login />} />
      {/* <Route path ="/home" element={ <Home />} /> */}
      {/* <Route path ="/dashboard" element={ <Dashboaard />} /> */}
   
    
     </Routes>
    </>
  )
}

export default App