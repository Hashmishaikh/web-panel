import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
 
    return (
        <div className="top">
            <div className="topLeft">
                LOGO
            </div>
            <div className="topCenter">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <Link className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" to="/" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" to="/tasks" role="tab" aria-controls="pills-profile" aria-selected="false">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" to="/user" role="tab" aria-controls="pills-contact" aria-selected="false">User</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
