import React from 'react'
import { Link, Outlet } from 'react-router'
import students from '../data/students'
function StudentList() {
  return (
    <div>
      <h4>Student List</h4>
      
      {students.map((std,index) => (
        <div>
          <h6>{std.name}
            <Link to={`/dashboard/profile/${std.id}`} >View Profile</Link>
          </h6>
       
        </div>

      ))}




   
      <Outlet/>
    
    </div>
  )
}

export default StudentList