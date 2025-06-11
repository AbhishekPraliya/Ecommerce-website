import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import ImageSlider from "../../Components/ImageSlider/ImageSlider.jsx"
import ProductSlider from "../../Components/ProductSlider/ProductSlider.jsx"
import TrendingCategories from "../../Components/TrendingCategories/TrendingCategories.jsx"
import AdvertisementPanel from "../../Components/AdvertisementPanel/AdvertisementPanel.jsx"
import WelcomeHeader from "../../Components/WelcomeHeader/WelcomeHeader.jsx"
import { ArrowUp } from 'lucide-react';

function HomePage() {
    const [listCount, setListCount] = useState(1);
    const [showTop, setShowTop] = useState(false);
    const containerRef = useRef(null);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Scroll event to load more and toggle back-to-top
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            // Trigger when user is within 100vh (1 screen height) of bottom
            if (scrollHeight - scrollTop - clientHeight <= clientHeight) {
                setListCount((prev) => prev + 1);
            }

            // Toggle back-to-top button
            setShowTop(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // Render repeated blocks
    const renderBlocks = () => {
        const components = [];
        for (let i = 0; i < listCount; i++) {
            components.push(
                <React.Fragment key={i}>
                    <ImageSlider slide={`slide${i + 1}`} />
                    <ProductSlider category={`category${i * 4 + 1}`} />
                    <ProductSlider category={`category${i * 4 + 2}`} />
                    <TrendingCategories />
                    <ProductSlider category={`category${i * 4 + 3}`} />
                    <AdvertisementPanel offerImage={`./offer-image1.png`} />
                    <ProductSlider category={`category${i * 4 + 4}`} />
                </React.Fragment>
            );
        }
        return components;
    };

    return (
        <div className="home-page" ref={containerRef}>
            <WelcomeHeader />
            {renderBlocks()}

            {showTop && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <ArrowUp className='arrow-up' />
                </button>
            )}
        </div>
    );
}

export default HomePage;
