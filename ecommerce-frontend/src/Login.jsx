import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css'; // نفس ملف الستايل الموجود عندك

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password
      });

      // حفظ التوكن والرول
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('role', response.data.user.role);

      // التوجيه حسب الدور
      if (response.data.user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }

    } catch (err) {
      console.log(err.response?.data);
      setError('Login failed. Please check your email and password.');
    }
  };

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

export default Login;
