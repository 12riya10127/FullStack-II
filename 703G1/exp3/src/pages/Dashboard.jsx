import React from 'react'
import students from '../data/student'
import { Link } from 'react-router'
import { Outlet } from "react-router";
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <h5>{students.length}</h5>

      <Link to="students" >View Students</Link>

      <Outlet />

      <p>End dashboard</p>
      <hr/>
    </div>
  )
}

export default Dashboard
