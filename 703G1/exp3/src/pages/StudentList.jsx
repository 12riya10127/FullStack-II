import React from 'react'
import {Link, Outlet} from 'react-router'
import StudentProfile from './StudentProfile'
import students from '../data/student'
function StudentList() {
  return (
    <div>
      StudentList
{}

    <br/>
      <Link to="/dashboard/studentprofile">View Profile</Link>
      <Outlet/>
    </div>
  )
}

export default StudentList
  
