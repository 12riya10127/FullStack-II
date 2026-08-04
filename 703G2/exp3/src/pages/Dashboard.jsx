import React from 'react'
import {Link, Outlet} from 'react-router'
function Dashboard() {
  return (
    <div>
      
      Dashboard
      <Link to="studentlist" >View Students</Link>
      <Outlet />
    </div>
  )
}

export default Dashboard