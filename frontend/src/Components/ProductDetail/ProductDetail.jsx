import React, { useState } from "react";
import "./ProductDetail.css";
import { Star } from "lucide-react";

const productDetails = {
    brand: "Bewakoof®",
    name: "Men's Purple T-shirt",
    price: 399,
    originalPrice: 899,
    discount: 55,
    rating: 4.2,
    reviews: 5,
    colors: [
        "#ffffff",
        "#0a0a1f",
        "#fcf7b0",
        "#835aff",
        "#f6e9f0",
        "#cdbddf",
        "#f4e1cb",
        "#e3e4dd",
        "#f572a1",
        "#034437",
        "#e7effb",
        "#cbf787",
        "#56603f",
        "#f5f3f2",
        "#a55446",
    ],
    selectedColor: "Lilac Bloom",
    sizes: ["S", "M", "L", "XL", "2XL"],
    outOfStockSize: "3XL",
    lowStockSize: "2XL",
    offer: "Buy 3 for 999",
};

const ProductDetail = () => {
    const [selectedColor, setSelectedColor] = useState(productDetails.colors[5]);
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <div className="product-detail-container">
            <h2 className="brand">{productDetails.brand}</h2>
            <p className="title">{productDetails.name}</p>

            <div className="price-section">
                <span className="current-price">₹{productDetails.price}</span>
                <span className="original-price">₹{productDetails.originalPrice}</span>
                <span className="discount">{productDetails.discount}% OFF</span>
                <div className="rating">
                    <Star size={14} fill="gold" stroke="none" /> {productDetails.rating} |{" "}
                    {productDetails.reviews}
                </div>
            </div>

            <p className="sold-info">281 people bought this in the last 7 days</p>
            <button className="tag">100% Cotton</button>

            <div className="section">
                <span className="section-label">Colour:</span>{" "}
                {productDetails.selectedColor}
                <div className="color-list">
                    {productDetails.colors.map((color, index) => (
                        <div
                            key={index}
                            className={`color-circle ${selectedColor === color ? "active" : ""
                                }`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                        />
                    ))}
                </div>
            </div>

            <div className="section">
                <div className="size-header">
                    <span>Select Size</span>
                    <a href="#size-guide" className="guide">
                        Size guide
                    </a>
                </div>
                <div className="size-list">
                    {productDetails.sizes.map((size, index) => (
                        <button
                            key={index}
                            className={`size-btn ${selectedSize === size ? "active" : ""} ${productDetails.lowStockSize === size ? "low-stock" : ""
                                }`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                    <button className="size-btn disabled">
                        {productDetails.outOfStockSize}
                    </button>
                </div>
                {selectedSize === productDetails.lowStockSize && (
                    <span className="low-stock-text">4 left</span>
                )}
            </div>

            <div className="action-buttons">
                <button className="add-btn">ADD TO BAG</button>
                <button className="wishlist-btn">♡ WISHLIST</button>
            </div>

            <div className="offers">
                <div className="offer-card">
                    <span role="img" aria-label="tag">
                        🏷️
                    </span>{" "}
                    {productDetails.offer}
                    <div className="auto-applied">Auto applied offer</div>
                    <a href="#view-all" className="view-all">
                        View all items ›
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
