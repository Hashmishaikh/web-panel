import React from 'react';
import './ChangePass.css';
import { Link } from 'react-router-dom';

const ChangePass = () => {
    return (
        <div className="change">
            <div className="changetop">
                Username: dummyName
                <br />
               <label>New Password: </label>
               <input className="inp" type="password" />
            </div>
            <div className="buttons">
                <Link to="/user"><button className="changepass">Save Password</button></Link>
                <Link to="login"> <button className="changepass logout">Logout</button></Link>
            </div>
        </div>
    )
}

export default ChangePass;
