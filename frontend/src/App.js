// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import axios from 'axios';

const App = () => {
  const [isAuthenticated, setAuth] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
      setAuth(true);
      // Verify token and get user role
      axios.get('/api/auth/me')
        .then(res => {
          setRole(res.data.role);
        })
        .catch(err => {
          console.error(err);
          setAuth(false);
        });
    }
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          isAuthenticated ? (
            role === 'admin' ? <Redirect to="/admin" /> : <Redirect to="/dashboard" />
          ) : (
            <Login setAuth={setAuth} />
          )
        )} />
        <Route path="/admin" render={() => (
          isAuthenticated && role === 'admin' ? (
            <AdminPage />
          ) : (
            <Redirect to="/" />
          )
        )} />
        <Route path="/dashboard" render={() => (
          isAuthenticated && role === 'customer' ? (
            <UserPage />
          ) : (
            <Redirect to="/" />
          )
        )} />
      </Switch>
    </div>
  );
};

export default App;
