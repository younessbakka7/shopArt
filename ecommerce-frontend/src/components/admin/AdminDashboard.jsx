import React from 'react';
import Sidebar from '../admin/Sidebar';
import Header from '../admin/Header';
import '../admin/Sidebar.css';


function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <p>This is your admin area. You can manage products, users, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
