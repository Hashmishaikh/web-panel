import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className="users">
            <div className="usertop">
                Username: dummyName
                <br />
                Password: *******
            </div>
            <div className="buttons">
                <Link to="/newpass"><button className="changepass">Change Password</button></Link>
               <Link to="login"> <button className="changepass logout">Logout</button></Link>
            </div>
        </div>
    )
}

export default User
