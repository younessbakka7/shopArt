import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirm,
      });
      setSuccessMsg('Registration successful! You can now log in.');
      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
      
        const firstError = Object.values(err.response.data.errors)[0][0];
        setError(firstError);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="login-wrapper">
      <h2 className="login-title">Create Account</h2>
      <p className="login-subtitle">Fill in the details to create your account</p>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <button className="login-btn" type="submit">Register</button>
      </form>
      {error && <p className="error-msg">{error}</p>}
      {successMsg && <p style={{ color: 'green', marginTop: '20px' }}>{successMsg}</p>}
    </div>
  );
}

export default Register;
