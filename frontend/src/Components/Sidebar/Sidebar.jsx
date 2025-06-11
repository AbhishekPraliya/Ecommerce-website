// sidebar.jsx
import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const FilterSection = ({ title, options, maxVisible = 5 }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleOptions = showAll ? options : options.slice(0, maxVisible);
    const shouldShowToggle = options.length > maxVisible;

    return (
        <div className="filter-section">
            <h4 className="filter-subheading">{title}</h4>
            <ul>
                {visibleOptions.map((option, index) => (
                    <li key={index}>
                        <label>
                            <input type="checkbox" /> {option}
                        </label>
                    </li>
                ))}
            </ul>
            {shouldShowToggle && (
                <span
                    className="show-toggle"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Hide' : 'Show'}
                </span>
            )}
        </div>
    );
};

const Sidebar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filters = [
        { title: 'Sizes', options: ['XS', 'S', 'M', 'L', 'XL'] },
        { title: 'Brand', options: ['bewakoof®', 'bewakoof air® 1.0', 'bewakoof heavy duty® 1.0', 'instafab plus', 'mad over print'] },
        { title: 'Color', options: ['black', 'green', 'blue', 'white', 'brown'] },
        { title: 'Design', options: ['graphic print', 'solid', 'typography', 'self design', 'printed'] },
        { title: 'Sleeve', options: ['half sleeve', 'full sleeve', 'raglan sleeve'] },
        { title: 'Neck', options: ['round neck', 'polo', 'v-neck', 'hooded'] },
        { title: 'Type', options: ['t-shirt', 'polo'] },
        { title: 'Ratings', options: ['4.5 and above', '4 and above', '3.5 and above', '3 and above', '2.5 and above'] },
        { title: 'Offers', options: ['buy 2 for 999'] },
        { title: 'Discount', options: ['10% or more', '20% or more', '30% or more', '40% or more', '50% or more', '60% or more', '70% or more', '80% or more'] }
    ];

    const sidebarContent = (
        <div className="sidebar">
            <h3 className="filter-title">Filters</h3>
            {filters.map((filter, index) => (
                <FilterSection key={index} title={filter.title} options={filter.options} />
            ))}
        </div>
    );

    return (
        <>
            {isMobile ? (
                <>
                    <button className="mobile-filter-toggle" onClick={() => setOpen(!open)}>Filter</button>
                    {open && <div className="mobile-sidebar">{sidebarContent}</div>}
                </>
            ) : (
                sidebarContent
            )}
        </>
    );
};

export default Sidebar;