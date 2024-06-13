import React from 'react';
import './TopBar.css';

function TopBar({ title }) {
    return (
        <div className="top-bar">
                <h1>{title}</h1>
            <div className="logo">My Portfolio</div>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
};

export default TopBar;