import { useEffect, useState } from "react";
import "./ImageSlider.css";
import AdvertisementPanel from "../AdvertisementPanel/AdvertisementPanel"
const slideImages = [
    "slide-image.png",
    "slide-image.png",
    "slide-image.png",
    "slide-image.png",
    "slide-image.png",
    "slide-image.png",
    "slide-image.png",
];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const resetPoint = slideImages.length - 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev >= resetPoint ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [resetPoint]);

    return (
    <div className="image-slider">
        <div className="slider-container">
            <div className="slider-label">
                <p className="slider-label-text">{"Best Deal For You"}</p>
            </div>
            <div
                className={`slider-wrapper ${slideImages.length < 3 ? 'slider-wrapper-center' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 33.3}vw)` }}
            >
                {slideImages.map((img, index) => (
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={`slider-image`}
                        key={index}
                    />
                ))}
            </div>

            <div className="slider-dots">
                {Array.from({ length: resetPoint + 1 }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
        <AdvertisementPanel />
    </div>
    );
}

export default ImageSlider;