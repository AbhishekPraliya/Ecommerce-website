import React from 'react';
import './WelcomeHeader.css';

const WelcomeHeader = () => {
    const homeBackground = './home-background.png'; // adjust path as needed
    return (
        <header
            className="welcome-header"
            style={{ backgroundImage: `url(${homeBackground})` }}
        >
            <div className="overlay-text">
                <div className="text-box">
                    <h1>{`Welcome to Our Website`}</h1>
                    <p>Where style meets the latest trends—just for you.</p>
                </div>
            </div>
        </header>
    );
};

export default WelcomeHeader;
