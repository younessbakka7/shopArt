import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './components/Client/pages/Dashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import './ToggleStyle.css';

/*-------- 1. مكوّن التبويبات (Login / Register) --------*/
function AuthTabs() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div style={{ maxWidth: 420, margin: '50px auto', textAlign: 'center' }}>
      {/* أزرار التبديل */}
      <div className="toggle-buttons">
        <button
          className={activeTab === 'login' ? 'toggle-btn active' : 'toggle-btn'}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={activeTab === 'register' ? 'toggle-btn active' : 'toggle-btn'}
          onClick={() => setActiveTab('register')}
        >
          Register
        </button>
      </div>

      {/* عرض Login أو Register */}
      <div style={{ marginTop: 30 }}>
        {activeTab === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  );
}

/*-------- 2. Route حماية العميل --------*/
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" replace />;
}

/*-------- 3. Route خاصة بالأدمين فقط --------*/
function AdminRoute({ children }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  return token && role === 'admin' ? children : <Navigate to="/" replace />;
}

/*-------- 4. التطبيق الرئيسي --------*/
export default function App() {
  return (
    <Router>
      <Routes>
        {/* الصفحة الرئيسية تحتوي على login/register */}
        <Route path="/" element={<AuthTabs />} />

        {/* لوحة تحكم الكليون محمية بالتوكن */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* لوحة تحكم الأدمين محمية بالتوكن + رول */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* أي مسار غير معروف يرجع إلى الصفحة الرئيسية */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
