import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from "./context/AuthContext";
import Login from './Login';
import Register from './Register';
import Dash from './Dash';
import Profile from './Profile';
import Layout from './layout/Layout';

/* comment for a change */
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Layout />}> 
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;