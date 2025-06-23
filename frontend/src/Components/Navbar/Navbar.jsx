// navbar.jsx
import { ChevronRight, Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logoSm from "../../assets/logo-sm.png";
import logoFull from "../../assets/logo-full.png"
import { useLocation,useNavigate } from 'react-router-dom';

const Navbar = () => {
    const inputRef = useRef(null);
    const [searchInput, setSearchInput] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [genderName, setGenderName] = useState("MEN")

    const location = useLocation();
    const navigate = useNavigate();
    // Check if the current path is the home page
    const isHomePage = location.pathname === '/';
    const [searchBar, setSearchBar] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [logoSmall, setLogoSmall] = useState(true)

    const handelSearch=(e)=>{
        e.preventDefault();
        if(searchInput.length===0) return;
        navigate(`/search?q=${searchInput.split(" ").join("+")}`);
        inputRef.current.blur();
        setSearchInput("");
        setIsSearchActive(false);
    }

    return (
        <>
            {/* Top Navbar */}
            <div className="top-nav">
                {logoSmall?(
                    <div className="logo-small" onClick={()=>navigate("/")}>
                        <div className="logo-image">
                            <img src={logoSm} alt="logo" />
                        </div>
                        <p className="text">COM</p>
                    </div>
                ):(
                    <div className="logo-full" onClick={()=>navigate("/")}>
                        <img src={logoFull} alt="logo" />
                    </div>
                )}
                <div className="Top-nav-switch-box nav-links">
                    {["MEN","WOMEN","BOTH","MORE"].map((item,index)=>(
                        <div
                            className={`switch-item ${genderName===item?"active":""}`}
                            key={index}
                            onClick={()=>setGenderName(item)}
                        >
                            <Link to="/">{item}</Link>
                        </div>
                    ))}
                </div>
                <div className="top-nav-right">
                    <div className={`search-bar-container ${searchBar ? "active" : "small-screen-hidden-icon "}`}>
                        <form className="search-box" onSubmit={handelSearch}>
                            <button style={{padding:0,margin:0,borderRadius:0,background:"transparent",border:'transparent',outline:"none"}}>
                            <Search className="search-icon" type="submit"/>
                            </button>
                            <input
                                ref={inputRef}
                                onFocus={() => setIsSearchActive(true)}
                                onBlur={() => {setTimeout(()=>{setIsSearchActive(false), setSearchBar(false)},200) }}
                                onChange={(e)=>setSearchInput(e.target.value)}
                                type="text"
                                value={searchInput}
                                className="search-input"
                                placeholder="Search by products"
                            />
                        </form>
                        <div className={`search-recommendations ${isSearchActive ? "active" : ""}`}>
                            <div className="search-recommendations-list">
                                {[
                                    "T-Shirts", "Jeans", "Jumpsuits", "Jackets", "Accessories", "Sneakers", "Bags", "Plus"
                                ].map((item, index) => (
                                    <Link to={`/collection/${item.split(" ").join("+")}`} onClick={()=>setSearchInput("")} className="search-recommendation-item" key={index}>
                                        <Search className="search-recommendation-icon" />
                                        <p className="search-recommendation-text">{item}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link onClick={() => setSearchBar(true)} className={`${searchBar ? "search-hidden" : ""} large-screen-hidden-icon top-nav-links`}>
                        <Search className="icon hidden-icon" />
                    </Link>
                    <Link to="/myaccount" className={`${searchBar ? "search-hidden" : ""} nav-login top-nav-links`}>
                        <p className="small-screen-hidden-icon">Login</p>
                        <User className="icon large-screen-hidden-icon" />
                    </Link>
                    <Link to="/wishlist" className={`${searchBar ? "search-hidden" : ""} top-nav-links`}>
                        <Heart className="icon" />
                    </Link>
                    <Link to="/cart" className={`${searchBar ? "search-hidden" : ""} top-nav-links`}>
                        <ShoppingBag className="icon"/>
                    </Link>

                </div>
            </div>

            {/* Bottom Navbar */}
            {isHomePage && (<div className={`bottom-nav ${menuOpen ? "open" : ""}`}>
                <div to="/" className="menu-icon">
                    <Menu className="menu-icon icon" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div className="bottom-nav-switch-box">
                    {["MEN","WOMEN","BOTH"].map((item,index)=>(
                        <button
                            onClick={()=>setGenderName(item)}
                            className={`button ${genderName===item?"active":""}`}
                            key={index}
                        >{item}</button>
                    ))}
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
                        "BEWAKOOF AIR",].map((item, index) => (
                            <div className="bottom-links-box" key={index}>
                                <Link to={"/collection/"+item.split(" ").join("-").toLowerCase()} className="bottom-link-items">{item}</Link>
                            </div>
                        ))}
                </div>
            </div>)}

            {!isHomePage && (
                <div className="breadcrumb-container">
                    <div className="breadcrumb">
                        {[
                            {
                                route:"",
                                routeName:"Home"},
                            {
                                route:"collection/collection1",
                                routeName:"Buy Mens Fashion Clothing India"
                            }].map((item,index)=>(
                            <div className="breadcrumb-item" key={index}>
                                <Link to={"/"+item.route}>{item.routeName}</Link>
                                <ChevronRight className="breadcrumb-icon" />
                            </div>
                        ))}

                        <div className="current breadcrumb-item">Men's Black Batman Outline Logo Graphic Printed Oversized T-shirt</div>
                    </div>
                </div>
            )}

            {  /* Background Hider */}
            {menuOpen && (
                <div
                    className={`nav-background-hider ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}></div>
            )}
        </>
    );
};

export default Navbar;
