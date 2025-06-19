import React, { useState, useEffect } from 'react';
import './ProductImageContainer.css';
import {
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';
import productImage1 from '../../assets/product1.png';
import productImage2 from '../../assets/product2.png';
import productImage3 from '../../assets/product3.png';

const images = [
    productImage1,
    productImage2,
    productImage3,
    productImage1,
    productImage2,
    productImage3,
];

const ProductImageContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [thumbStart, setThumbStart] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    const visibleThumbs = 4;

    const handleResize = () => {
        setIsMobile(window.innerWidth < 600);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showPrevImage = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
        if (!isMobile && thumbStart > 0) setThumbStart(thumbStart - 1);
    };

    const showNextImage = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
        if (!isMobile && thumbStart + visibleThumbs < images.length) setThumbStart(thumbStart + 1);
    };

    const visibleImages = isMobile ? images : images.slice(thumbStart, thumbStart + visibleThumbs);

    return (
        <div className={`pic-wrapper ${isMobile ? 'mobile' : ''}`}>
            {!isMobile && (
                <div className="thumb-section">
                    <button className="arrow-btn" onClick={showPrevImage}>
                        <ChevronUp />
                    </button>

                    <div className="thumb-list vertical">
                        {visibleImages.map((img, idx) => {
                            const actualIndex = thumbStart + idx;
                            return (
                                <div
                                    key={actualIndex}
                                    className={`thumb-box ${actualIndex === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(actualIndex)}
                                    style={{ backgroundImage: `url(${img})` }}
                                />
                            );
                        })}
                    </div>

                    <button className="arrow-btn" onClick={showNextImage}>
                        <ChevronDown />
                    </button>
                </div>
            )}

            <div className="main-img-section">
                <button className="side-arrow left" onClick={showPrevImage}>
                    <ChevronLeft />
                </button>

                <div
                    className="main-img-box"
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                ></div>

                <button className="side-arrow right" onClick={showNextImage}>
                    <ChevronRight />
                </button>

                {isMobile && (
                    <div className="thumb-list horizontal-scroll">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`thumb-box ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                                style={{ backgroundImage: `url(${img})` }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductImageContainer;
