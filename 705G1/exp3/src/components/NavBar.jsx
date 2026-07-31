import React from 'react'
import {Link} from 'react-router'
function NavBar() {
  return (
      <nav>
          <h3> Student Management System 📚</h3>
          <Link to="/"> Home 🏠 |</Link>
          <Link to="/dashboard"> Dasboard 🧮 |</Link>
          <Link to="/login"> Login 🔑|</Link>
    </nav>
  )
}

export default NavBar