import React from 'react';
import './Dash.css';
import Sidebar from './Sidebar';

const Dash = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Dash;