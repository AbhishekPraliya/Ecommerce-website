import React, { useEffect, useState } from "react";
import "./AdvertisementPanel.css";

const SALE_END_DATE = new Date("2025-06-10T23:59:59"); // ← Change to your desired sale end time

const AdvertisementPanel = ({ offerImage}) => {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
    // const offerImage = "./offer-image1.png"; // Ensure image is in the correct folder

    function getTimeRemaining() {
        const now = new Date();
        const total = SALE_END_DATE - now;
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return { total, days, hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (timeLeft.total <= 0) {
        return <div className="sale-ended">Sale has ended!</div>;
    }

    return (
        <div className="advertisement-panel">
            {offerImage && (<div className="offer-image-div">
                <img src={offerImage} alt="Offer" className="offer-image" />
            </div>)}

            <div className="offer-label">
                <p className="offer-label-text">{"Deal Expires In"}</p>
            </div>
            <div className="reverse-time">
                <div className="time-box">
                    <span>{timeLeft.days}</span>
                    <p>Days</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.hours}</span>
                    <p>Hours</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.minutes}</span>
                    <p>Minutes</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.seconds}</span>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementPanel;
