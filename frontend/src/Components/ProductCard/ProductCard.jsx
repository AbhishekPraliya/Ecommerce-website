import './ProductCard.css';
import productImage from '../../assets/product-image2.png';

const ProductCard = ({product}) => {
    // const product ={
    //     image: './product-image2.png',
    //     label: 'OVERSIZED FIT',
    //     rating: '4.5',
    //     brand: 'Bewakoof®',
    //     name: "Men's Blue Be Yourself Graphic...",
    //     price: '₹699',
    //     original: '₹2,249',
    //     discount: '68% off',
    // }
    console.log(product.image);

    return (
        <div className="product-card" key={1}>
            <div className="image-container">
                <img src={productImage} alt={product.name} />
                {product.label && <span className="fit-label">{product.label}</span>}
                <div className="rating">★ {product.rating}</div>
            </div>
            <div className="product-details">
                <h2 className="brand-name">{product.brand}</h2>
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
