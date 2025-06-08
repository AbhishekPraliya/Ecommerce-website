import React from 'react';
import './TrendingCategories.css';

const categoryData = Array.from({ length: 16 }, (_, i) => ({
    name: `Category${i + 1}`,
    image: `./category-image.png`, // Use public folder or adjust path if imported
}));

const TrendingCategories = () => {
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
        </div>
    );
};

export default TrendingCategories;
