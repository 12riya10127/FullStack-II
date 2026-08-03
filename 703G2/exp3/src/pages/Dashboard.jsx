import React from 'react'
import {Link} from 'react-router'
function Dashboard() {
  return (
    <div>
      Dashboard
    <Link to="/studentlist" >View Students</Link>
    </div>
  )
}

export default Dashboard