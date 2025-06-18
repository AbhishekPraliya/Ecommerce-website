// ProductCollectionHeader.jsx
import React, { useState } from 'react';
import './ProductCollectionHeader.css';
import { CheckCircle, Circle, SortAsc } from 'lucide-react'; // Lucide icon

const ProductCollectionHeader = ({ searchTerm = "Tshirts Man O", totalProducts = 90 }) => {
    const [sortOpen, setSortOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('New Arrival');

    const sortOptions = [
        'Popularity',
        'New Arrival',
        'Price : High to Low',
        'Price : Low to High'
    ];

    const handleSortChange = (option) => {
        setSelectedSort(option);
        setSortOpen(false);
        // Sorting logic goes here
    };

    return (
        <div className="pch-container">
            {/* Left side */}
            <div className="pch-left">
                <h2 className="pch-title">
                    Search Results For : <span className="pch-term">"{searchTerm}"</span>
                    <span className="pch-count">({totalProducts} Products)</span>
                </h2>
            </div>

            {/* Right side - Sort dropdown */}
            <div className="pch-right">
                <button
                    className="pch-sort-button"
                    onClick={() => setSortOpen(!sortOpen)}
                >
                    <SortAsc size={16} />
                    <span className="pch-sort-label">Sort by :</span>
                    <span className="pch-sort-selected">{selectedSort}</span>
                </button>

                {sortOpen && (
                    <ul className="pch-dropdown">
                        {sortOptions.map((option) => (
                            <li
                                key={option}
                                className="pch-dropdown-item"
                                onClick={() => handleSortChange(option)}
                            >
                                {option == selectedSort?
                                    <CheckCircle size={18} strokeWidth={3} className='check-circle-icon' /> 
                                    :
                                    <Circle size={18} strokeWidth={3} className='check-icon' />
                                }
                                <p>{option}</p>
                            </li>
                        ))}
                    </ul>
                )}
                {sortOpen &&(
                    <div
                        className={`background-hider ${sortOpen ? "active" : ""}`}
                        onClick={() => setSortOpen(false)}></div>
                )}
            </div>
        </div>
    );
};

export default ProductCollectionHeader;
