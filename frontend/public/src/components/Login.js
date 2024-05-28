// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setAuth }) => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      setAuth(true);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
