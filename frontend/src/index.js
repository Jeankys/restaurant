import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa el archivo CSS
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
