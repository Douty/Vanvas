import React from 'react';
import './Login.css';
import logo from './assets/Vanvas.png';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className="login-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p className="register-link">Don't have an account? <a href="#">Register here</a></p>
        </div>
    );
};

export default Login;
