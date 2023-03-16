import React from 'react'
import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
            <ul>
                {/* <li><a>Dashboard</a></li> */}
                <li><a className='active'>My Profile</a></li>
                <li><a>Add Users</a></li>
                <li><a>Users</a></li>
            </ul>
        </div>
  )
}

export default SideBar