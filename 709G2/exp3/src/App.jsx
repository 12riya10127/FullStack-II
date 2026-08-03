import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App