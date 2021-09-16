import React from 'react';
import "./Home.css";
import Dropdown from '../Pages/Dropdown';
import Information from '../Pages/Information';

const Home = () => {
    return (
        <div className="home">
            <Dropdown />
            <Information />
        </div>
    )
}

export default Home;
