// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import axios from 'axios';

const App = () => {
  const [isAuthenticated, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setAuth(true);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (isAuthenticated ? <Redirect to="/dashboard" /> : <Login setAuth={setAuth} />)} />
        <Route path="/admin" render={() => (isAuthenticated ? <AdminPage /> : <Redirect to="/" />)} />
        <Route path="/dashboard" render={() => (isAuthenticated ? <UserPage /> : <Redirect to="/" />)} />
      </Switch>
    </Router>
  );
};

export default App;
