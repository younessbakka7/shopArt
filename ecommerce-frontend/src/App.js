import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './ToggleStyle.css';  // ملف ستايل جديد للأزرار

function App() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div style={{ maxWidth: 420, margin: '50px auto', textAlign: 'center' }}>
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

      <div style={{ marginTop: 30 }}>
        {activeTab === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default App;
