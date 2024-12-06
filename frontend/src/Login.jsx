import React from 'react';
import './Login.css';
import logo from './assets/Vanvas.png';
import { useAuth } from './context/AuthContext';

/* comment for a change */
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if(formData.email !== "" && formData.password !== ""){
            auth.loginAction(formData);
            if(auth.user === null){
                auth.loginAction(formData);
            }
            return;
        }
        alert("please provide a valid input");
    };

    /*
    const toggleForm = () => {
        setIsLogin(!isLogin);
        setError('');
        setSuccess('');
        setFormData({
            firstName: '',
            lastName: '',
            studentEmail: '',
            studentPassword: '',
            confirmPassword: '',
            isAdmin: false,
        });
    };
    */

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
