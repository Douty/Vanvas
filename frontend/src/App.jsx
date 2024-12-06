import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from "./context/AuthContext";
import Login from './Login';
import Dash from './Dash';
import Profile from './Profile';
import Layout from './layout/Layout';

/* comment for a change */
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </Router>
  );
};

export default App;