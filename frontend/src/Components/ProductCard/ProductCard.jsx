import './ProductCard.css';
import productImage from '../../assets/product-image2.png';
import {useNavigate} from "react-router-dom"
import { Heart } from 'lucide-react';

const ProductCard = ({product,WishListActive}) => {
    const navigate = useNavigate();

    return (
        <div className={`product-card ${WishListActive?"":"hover-true"}`} onClick={()=>navigate("/product/product1")}>
            <div className="image-container">
                <img src={productImage} alt={product.name} />
                {product.label && <span className="fit-label">{product.label}</span>}
                <div className="rating">★ {product.rating}</div>
            </div>
            <div className="product-details">
                <div className='product-details-brand-heart'>
                    <h2 className="brand-name">{product.brand}</h2>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className='product-details-icon-box'
                    >
                        <Heart
                            className='product-details-heart-icon'
                            color={`${product.like?"red":"black"}`}
                            fill={`${product.like?"red":"transparent"}`}
                        />
                    </div>
                </div>
                <p className="product-name">{product.name}</p>
                <div className="price-section">
                    <span className="price">{product.price}</span>
                    <span className="original-price">{product.original}</span>
                    <span className="discount">{product.discount}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
