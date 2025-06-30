import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      localStorage.setItem('token', response.data.access_token);
      setIsLoggedIn(true);
    } catch (err) {
      setError('Login failed. Please check your email and password.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="login-wrapper" style={{ position: 'relative' }}>
        <h2 className="login-title">Welcome to the Store!</h2>
        <button className="login-btn" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="login-wrapper">
      <div className="cart-icon">🛒</div>
      <h2 className="login-title">Sign In</h2>
      <p className="login-subtitle">Enter your account details to start shopping</p>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="login-btn" type="submit">Sign In</button>
      </form>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default App;
