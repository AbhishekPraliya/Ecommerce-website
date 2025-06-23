import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown, ShoppingCart, PackageCheck, AwardIcon } from 'lucide-react';
import './CartPage.css';
import ProductImage2 from "../../assets/product-image2.png"
import WishList from "../WishList/WishList.jsx"

const cartData = [
    {
        offerName: 'Buy 2 for 999 offer applied!',
        routeOffer: 'buy-2-for-999',
        products: [
            {
                id: 1,
                title: 'Men\'s Red The Batman Graphic Printed Oversized T-shirt',
                price: 500,
                originalPrice: 1299,
                saved: 799,
                size: 'L',
                qty: 1,
                image: ProductImage2,
                deliveryDate: '25 Jun 2025',
            },
            {
                id: 2,
                title: 'Men\'s Black Batman Outline Logo Graphic Printed Oversized T-shirt',
                price: 499,
                originalPrice: 1299,
                saved: 800,
                size: 'L',
                qty: 1,
                image: ProductImage2,
                deliveryDate: '25 Jun 2025',
            }
        ]
    },
    {
        offerName: 'Buy 3 for 999 offer applicable',
        routeOffer: 'buy-3-for-999',
        products: [
            {
                id: 3,
                title: 'Men\'s Red Moon Rider Graphic Printed T-shirt',
                price: 399,
                originalPrice: 999,
                saved: 600,
                size: 'L',
                qty: 1,
                image: ProductImage2,
                deliveryDate: '25 Jun 2025',
            }
        ]
    }
];

const CartPage = () => {
    const [openPriceSummary, setOpenPriceSummary] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="cart-page">
            <div className="cart-information-container">
                <div className='cart-heading-container'>
                    <span className="cart-term">Cart</span>
                    <span className="cart-item-count">(3 Items)</span>
                </div>
                <div className="cart-data">
                    <div className="cart-left">
                        <div className="cart-saving-banner">
                            <span>You are saving ₹2199 on this order</span>
                        </div>

                        {cartData.map((group, i) => (
                            <div className="cart-group" key={i}>
                                <div className="cart-group-header">
                                    <h4>{group.offerName}</h4>
                                    <Link to={`/collection/${group.routeOffer}`} className="add-items-btn">ADD ITEMS</Link>
                                </div>
                                {group.products.map((product) => (
                                    <div className="cart-product" key={product.id}>
                                        <div className="cart-product-image-info-container">
                                            <div className="cart-product-image-container">
                                                <img src={product.image} alt={product.title} className="product-image" />
                                            </div>

                                            <div className="cart-product-info">
                                                <div className="cart-product-title-section">
                                                    <div className="cart-product-text">
                                                        <h5 className='cart-product-brand-name'>Bewakoof®</h5>
                                                        <p className='cart-product-name'>{product.title}</p>
                                                        <p className="cart-item-offer-text">{group.offerName}</p>
                                                        <p className="cart-item-delivery-date">
                                                            <span className="green-dot" /> Get it by <b>{product.deliveryDate}</b>
                                                        </p>
                                                    </div>
                                                    <div className="cart-product-footer disable-ls-1000">
                                                        <div className="cart-footer-button-group">
                                                            <button className="cart-footer-option-button">Size: {product.size}<ChevronDown size={18} /></button>
                                                            <button className="cart-footer-option-button">Qty: {product.qty}<ChevronDown size={18} /></button>
                                                        </div>
                                                        <div className="cart-footer-product-price">
                                                            <div className='cart-footer-price-box'>
                                                                <p className="cart-footer-final-price">₹{product.price}</p>
                                                                <p className="cart-footer-original-price">₹{product.originalPrice}</p>
                                                            </div>
                                                            <p className="cart-footer-saved-text">You saved ₹{product.saved}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="remove-btn">✕</button>
                                            </div>
                                        </div>
                                        <div className="cart-product-footer enable-ls-1000">
                                            <div className="cart-footer-button-group">
                                                <button className="cart-footer-option-button">Size: {product.size}<ChevronDown size={18}/></button>
                                                <button className="cart-footer-option-button">Qty: {product.qty}<ChevronDown size={18}/></button>
                                            </div>
                                            <div className="cart-footer-product-price">
                                                <div className='cart-footer-price-box'>
                                                    <p className="cart-footer-final-price">₹{product.price}</p>
                                                    <p className="cart-footer-original-price">₹{product.originalPrice}</p>
                                                </div>
                                                <p className="cart-footer-saved-text">You saved ₹{product.saved}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>

                    <div className="cart-right">
                        <div className="cart-right-delivery-section">
                            <div className="cart-right-header">
                                <span>
                                    Deliver to: <b>135001</b>
                                </span>
                                <button
                                    className="cart-right-change-btn"
                                    onClick={() => navigate('/change-address')}
                                    style={{ outline: 'none' }}
                                >
                                    Change
                                </button>
                            </div>
                        </div>

                        <div className="cart-right-coupon-section">
                            <h4 className="cart-right-coupon-heading">Coupons & Offers</h4>

                            <div className="cart-right-header">
                                <div className="cart-right-icon-text">
                                    <div className="cart-right-percent-icon">%</div>

                                    <div className="cart-right-title">
                                        <span className="cart-right-bold-text">
                                            Apply Coupon / Gift Card
                                        </span>
                                        <p className="cart-right-subtext">
                                            Crazy deals and other amazing offers
                                        </p>
                                    </div>
                                </div>

                                <button
                                    className="cart-right-view-btn"
                                    style={{ outline: 'none' }}
                                >
                                    VIEW
                                </button>
                            </div>
                        </div>
                    

                        <div className="cart-right-price-summary">
                            <div className="cart-right-header" onClick={() => setOpenPriceSummary(!openPriceSummary)}>
                                <h4 className="cart-right-title">Price Summary</h4>
                                <span className="cart-right-toggle-icon">
                                <ChevronUp
                                    size={18}
                                    className={openPriceSummary ? "cart-transition-rotate-up" : "cart-transition-rotate-down"}
                                />
                                </span>
                            </div>
                            <div className="cart-right-summary-item cart-right-subtotal">
                                <span>Subtotal</span>
                                <span>₹1,398</span>
                            </div>

                            <div className={`cart-right-details ${openPriceSummary ? 'open-cart-right-details' : 'closed-cart-right-details'}`}>
                                <div className="cart-right-summary-item">
                                <span>Total MRP</span>
                                <span>₹3,597</span>
                                </div>
                                <div className="cart-right-summary-item cart-right-discount">
                                <span>Bag Discount</span>
                                <span>-₹1,800</span>
                                </div>
                                <div className="cart-right-summary-item cart-right-discount">
                                    <span>
                                        Combo Offer Discount <a href="#">T&C</a>
                                    </span>
                                    <span>-₹399</span>
                                </div>
                                <div className="cart-right-summary-item">
                                <span>Delivery Fee</span>
                                <span className="cart-right-green">Free</span>
                                </div>
                            </div>

                            <p className="cart-right-free-msg">
                                Yay! You get <b>FREE delivery</b> on this order
                            </p>
                            <button
                                className="cart-right-proceed-btn"
                                style={{ outline: 'none' }}
                            >
                                PROCEED
                            </button>
                        </div>

                        <div className="cart-right-bottom-footer">
                            <div className="cart-right-feature-item">
                                <ShoppingCart size={40} color="#A6A6A6" />
                                <span>100% Secure Payment</span>
                            </div>
                            <div className="cart-right-feature-item">
                                <PackageCheck size={40} color="#A6A6A6" />
                                <span>Easy Returns & Instant Refunds</span>
                            </div>
                            <div className="cart-right-feature-item">
                                <AwardIcon size={40} color="#A6A6A6" />
                                <span>Quality Assurance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-wishlist-container">
                <WishList/>
            </div>

        </div>
    );
};

export default CartPage;
