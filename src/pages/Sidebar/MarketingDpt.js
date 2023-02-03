import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar-header" >Dashboard</div>
    <ul className="sidebar-menu">
      <li className="sidebar-menu-item">
        <Link to="/Admin/Adverts">Adverts</Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="/Admin/Stories">Stories</Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="/Admin/Photographs">Photograph</Link>
      </li>
      <li className="sidebar-menu-item">
        <div>Invoice</div>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar