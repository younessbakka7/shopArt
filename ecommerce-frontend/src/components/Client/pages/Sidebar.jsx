import React from 'react';

import { FaHome, FaShoppingCart, FaHeart, FaCog, FaSignOutAlt, FaQuestionCircle } from 'react-icons/fa';

export default function Sidebar({ onLogout }) {
  return (
    <div className="sidebar">
      <h2 className="logo">MyStore</h2>
      <ul className="sidebar-links">
        <li><FaHome /> Home</li>
        <li><FaShoppingCart /> My Orders</li>
        <li><FaHeart /> Wishlist</li>
        <li><FaCog /> Settings</li>
        <li><FaQuestionCircle /> Support</li>
      </ul>
      <button className="logout-btn" onClick={onLogout}><FaSignOutAlt /> Logout</button>
    </div>
  );
}
