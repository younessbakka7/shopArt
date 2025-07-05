// components/admin/Sidebar.jsx
import React from 'react';
import '../admin/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Admin</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
