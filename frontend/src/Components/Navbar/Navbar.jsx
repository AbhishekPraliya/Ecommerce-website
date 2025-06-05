// navbar.jsx
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false)

    return (
        <>
            {/* Top Navbar */}
            <div className="top-nav">
                <div className="logo-small">
                    <div className="logo-image">
                        <img src="./logo-sm.png" alt="logo" />
                    </div>
                    <p className="text">COM</p>
                </div>
                {/* <div className="logo-full">
                    <img src={"logo-full.png"} alt="logo" />
                </div> */}
                <div className="Top-nav-switch-box nav-links">
                    <div className="switch-item active">
                        <Link to="/men">MEN</Link>
                    </div>
                    <div className="switch-item">
                        <Link to="/women">WOMEN</Link>
                    </div>
                    <div className="switch-item">
                        <Link to="/both">BOTH</Link>
                    </div>
                    <div className="switch-item">
                        <Link to="/more">MORE</Link>
                    </div>
                </div>
                <div className="top-nav-right">
                    <div className="search-bar-container small-screen-hidden-icon">
                        <div className="search-box">
                            <Search className="search-icon" />
                            <input
                                onFocus={() => setIsSearchActive(true)}
                                onBlur={() => setIsSearchActive(false)}
                                type="text"
                                className="search-input"
                                placeholder="Search by products"
                            />
                        </div>
                        <div className={`search-recommendations ${isSearchActive ? "active" : ""}`}>
                            <div className="search-recommendations-list">
                                {[
                                    "T-Shirts","Jeans","Jumpsuits","Jackets","Accessories","Sneakers","Bags","Plus"
                                ].map((item, index) => (
                                    <Link to={"/"} className="search-recommendation-item" key={index}>
                                        <Search className="search-recommendation-icon" />
                                        <p className="search-recommendation-text">{item}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Link to="/search" className="large-screen-hidden-icon top-nav-links">
                        <Search className="icon hidden-icon" />
                    </Link>

                    <Link to="#" className="nav-login top-nav-links">
                        <p className="small-screen-hidden-icon">Login</p>
                        <User className="icon large-screen-hidden-icon" />
                    </Link>
                    <Link to="/" className="top-nav-links">
                        <Heart className="icon" />
                    </Link>
                    <Link to="/" className="top-nav-links">
                        <ShoppingBag className="icon"  onClick={() => setMenuOpen(!menuOpen)}/>
                    </Link>
                    <Link to="/" className="top-nav-links menu-icon">
                        <Menu className="menu-icon icon" onClick={() => setMenuOpen(!menuOpen)} />
                    </Link>
                    
                </div>
            </div>

            {/* Bottom Navbar */}
            <div className={`bottom-nav ${menuOpen ? "open" : ""}`}>
                <div className="bottom-nav-switch-box">
                    <button className="button active">MEN</button>
                    <button className="button active">WOMEN</button>
                    <button className="button active">BOTH</button>
                </div>
                <div className={`bottom-links ${menuOpen ? "open" : ""}`}>
                    {['SHOP NOW',
                    'LIVE NOW',
                    'PLUS SIZE',
                    'ACCESSORIES',
                    'OFFICIAL MERCH',
                    'SNEAKERS',
                    'BEWAKOOF AIR',
                    'ACCESSORIES',
                    'OFFICIAL MERCH',
                    'SNEAKERS',
                    "BEWAKOOF AIR",].map((item,index)=>(
                        <div className="bottom-links-box" key={index}>
                            <Link to="#" className="bottom-link-items">{item}</Link>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    );
};

export default Navbar;
