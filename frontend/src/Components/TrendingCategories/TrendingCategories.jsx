import React from 'react';
import './TrendingCategories.css';
import { useNavigate } from 'react-router-dom';

const categoryData = Array.from({ length: 10 }, (_, i) => ({
    name: `Category${i + 1} Abcdefgh hhhhhkk`,
    image: `./category-image.png`, // Use public folder or adjust path if imported
}));

const TrendingCategories = () => {
    const navigate = useNavigate();
    return (
        <div className="trending-categories">
            <h2 className="categories-heading">Trending Categories</h2>
            <div className="categories-grid">
                {categoryData.map((cat, index) => (
                    <div className="category-item" key={index}>
                        <img src={cat.image} alt={cat.name} className="category-image" />
                        <p className="category-name">{cat.name}</p>
                    </div>
                ))}
            </div>
            <div className='bottom-label'>
                <p
                    className='bottom-label-text'
                    onClick={()=>navigate('/men-clothing')}
                >View All</p>
            </div>
        </div>
    );
};

export default TrendingCategories;
