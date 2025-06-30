import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useAuth0 } from "@auth0/auth0-react";
import googleLogo from "../../assets/google-logo.png"
import microsoftLogo from "../../assets/microsoft-logo.png"
import facebookLogo from "../../assets/facebook-logo.png"
import appleLogo from "../../assets/apple-logo.png"
import loginPageImg from "../../assets/login-page-img.png"

const LoginPage = () => {
    const [mobileNumber, setMobileNumber] = useState("");
    const { loginWithRedirect } = useAuth0();

    const handleLogin = (provider) => {
        loginWithRedirect({ connection: provider,});
    };
    useEffect(()=>{
        loginWithRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div className="login-page-outer-container">
            <div className="login-page-inner-container">
                {/* Left Side Image */}
                <div className="login-page-left">
                    <img
                        src={loginPageImg}
                        alt="Login Visual"
                        className="login-page-left-image"
                    />
                </div>

                {/* Right Side Content */}
                <div className="login-page-right">
                    <h2 className="login-page-heading">Login / Signup</h2>
                    <p className="login-page-subtext">
                        Join us now to be a part of Bewakoof® family.
                    </p>

                    {/* Mobile Number Login */}
                    <div className="login-page-phone-input">
                        <span className="login-page-flag">🇮🇳 +91</span>
                        <input
                            type="tel"
                            placeholder="Enter Mobile Number"
                            className="login-page-input"
                            value={mobileNumber}
                            pattern="[6-9]\d{9}"
                            maxLength={10}
                            onChange={(e)=>setMobileNumber(e.target.value)}
                        />
                    </div>
                    <button disabled={mobileNumber < 999999999} className={`login-page-continue-button ${mobileNumber<999999999?"login-page-continue-button-disable":""}`}>CONTINUE</button>

                    <div className="login-page-or-line">
                        <span>OR</span>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="login-page-social-grid">
                        <button
                            onClick={() => handleLogin("google-oauth2")}
                            className="login-page-social-button"
                        >
                            <img
                                src={googleLogo}
                                alt="Google"
                            />
                            Google
                        </button>

                        <button
                            onClick={() => handleLogin("facebook")}
                            className="login-page-social-button"
                        >
                            <img
                                src={facebookLogo}
                                alt="Facebook"
                            />
                            Facebook
                        </button>

                        <button
                            onClick={() => handleLogin("apple")}
                            className="login-page-social-button"
                        >
                            <img
                                src={appleLogo}
                                alt="Apple"
                            />
                            Apple
                        </button>

                        <button
                            onClick={() => handleLogin("windowslive")}
                            className="login-page-social-button"
                        >
                            <img
                                src={microsoftLogo}
                                alt="Microsoft"
                            />
                            Microsoft
                        </button>
                    </div>

                    <div className="login-page-checkbox">
                        <input type="checkbox" id="fast-checkout" />
                        <label htmlFor="fast-checkout">
                            Fetch my address for blazing fast checkout
                        </label>
                    </div>

                    <p className="login-page-terms">
                        By creating an account or logging in, you agree with Bewakoof’s{" "}
                        <a href="#">T&C</a> and <a href="#">Privacy Policy</a> and Shiprocket's{" "}
                        <a href="#">T&C</a> and <a href="#">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
