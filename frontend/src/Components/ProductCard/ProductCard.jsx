import './ProductCard.css';
// import productImage from '../../assets/product-image2.png';
import {useNavigate} from "react-router-dom"
import { Heart } from 'lucide-react';
// {discount
// image
// name
// offer
// originalPrice
// price
// rating
// _id:"686cfe2bdb1feea26687fbd0"
// }
const ProductCard = ({product,WishListActive}) => {
    const navigate = useNavigate();

    return (
        <div className={`product-card ${WishListActive?"":"hover-true"}`} onClick={()=>navigate(`/product/${product.name.toLowerCase().split(" ").join("-").split("'").join("")}--${product._id}`)}>
            <div className="image-container">
                <img src={product.image} alt={product.name} />
                {product.offer && <span className="fit-label">{product.offer}</span>}
                <div className="rating">★ {product.rating}</div>
            </div>
            <div className="product-details">
                <div className='product-details-brand-heart'>
                    <h2 className="brand-name">{product.businessName || "Business"}</h2>
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
                    <span className="original-price">{product.originalPrice}</span>
                    <span className="discount">{product.discount+"%"}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
