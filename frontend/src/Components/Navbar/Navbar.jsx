// navbar.jsx
import React, { useState } from "react";
import "./navbar.css";
import { Heart, ShoppingBag, Menu, Search } from "lucide-react";
import {Link } from "react-router-dom";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Top Navbar */}
            <div className="top-nav">
                <div className="logo">
                    <div className="logo-image">
                        <img src="./logo-img.png" alt="logo" />
                    </div>
                    <p className="text">COM</p>
                </div>
                <div className="nav-links">
                    <Link to="/" className="links">MEN</Link>
                    <Link to="/" className="links">WOMEN</Link>
                </div>
                <div className="top-nav-right">
                    <div className="search-bar-container">
                        <div className="search-box">
                            <Search className="search-icon" />
                            <input
                            type="text"
                            className="search-input"
                            placeholder="Search by products"
                            />
                        </div>
                    </div>
                    <Link to="#" className="nav-login">
                        LOGIN
                    </Link>
                    <Link to="/" className="top-nav-links">
                        <Heart className="icon" />
                    </Link>
                    <Link to="/" className="top-nav-links">
                        <ShoppingBag className="icon" />
                    </Link>
                    <Link to="/" className="top-nav-links">
                        <Menu className="menu-icon icon" onClick={() => setMenuOpen(!menuOpen)} />
                    </Link>
                    
                </div>
            </div>

            {/* Bottom Navbar */}
            <div className="bottom-nav">
                <div className="switch-box">
                    <button className="button">MEN</button>
                    <button className="button">WOMEN</button>
                    <div  className="active-background-button active">
                    </div>
                </div>
                <div className={`bottom-links ${menuOpen ? "open" : ""}`}>
                    <Link to="#" className="bottom-link-items">SHOP NOW</Link>
                    <Link to="#" className="bottom-link-items">LIVE NOW</Link>
                    <Link to="#" className="bottom-link-items">PLUS SIZE</Link>
                    <Link to="#" className="bottom-link-items">ACCESSORIES</Link>
                    <Link to="#" className="bottom-link-items">OFFICIAL MERCH</Link>
                    <Link to="#" className="bottom-link-items">SNEAKERS</Link>
                    <Link to="#" className="bottom-link-items">BEWAKOOF AIR</Link>
                    <Link to="#" className="bottom-link-items">ACCESSORIES</Link>
                    <Link to="#" className="bottom-link-items">OFFICIAL MERCH</Link>
                    <Link to="#" className="bottom-link-items">SNEAKERS</Link>
                    <Link to="#" className="bottom-link-items">BEWAKOOF AIR</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
