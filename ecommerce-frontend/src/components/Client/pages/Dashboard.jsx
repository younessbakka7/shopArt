import React from 'react';
import Sidebar from '../../Client/pages/Sidebar';
import Header from '../../Client/pages/Header';
import "../../Client/pages/Dashboard.css"




function Dashboard() {
  return (
    <div className="dashboard-container">
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

export default Dashboard;
