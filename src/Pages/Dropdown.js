import React from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
    
    <Link className="nav-link dropdown-toggle bord" data-toggle="dropdown" href="#" to="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>

    <div className="dropdown-menu">
      <Link className="dropdown-item" to="/login" >Login</Link>
      <Link className="dropdown-item">Another action</Link>
      <Link className="dropdown-item">Something else here</Link>
    </div>
  </li>
    )
}

export default Dropdown
