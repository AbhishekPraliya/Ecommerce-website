import { useDataStore } from "../../Store/useDataStore"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductCollection.css"
const ProductCollection = () => {
    const { products } = useDataStore();
    console.log(products);
    
    return (
        <div className={`product-list-container`}>
            {/* Product cards here */}
            {products.map((product, index) => (
            <div className="product-card-box" key={index}>
                <ProductCard product={product} key={index}/>
            </div>
            ))}
        </div>
    )
}

export default ProductCollection
