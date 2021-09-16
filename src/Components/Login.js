import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
const Login = () => {
    
    return (
        
        <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" required type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" required type="password" placeholder="Enter your password..." />
       <Link to="/"><button className="loginButton">Login</button></Link> 
      </form>
    </div>
    )
}

export default Login;
