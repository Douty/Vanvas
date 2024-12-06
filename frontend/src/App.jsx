import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AuthProvider from "./context/AuthContext";
import Login from './Login';
import Register from './Register';
import Dash from './Dash';
import Profile from './Profile';
import Course from './Course';
import Layout from './layout/Layout';


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
            <Route path="/course/:courseName" element={<Course />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;