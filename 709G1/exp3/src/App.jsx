import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import StudentList from './pages/StudentList'
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path='studentlist' element={<StudentList />} />
    </Route>




        <Route path='/login' element={<Login />} />
        

      </Routes>
    </>
   

  )
}

export default App