import "./ProductCollection.css"
import { useDataStore } from "../../Store/useDataStore"
import ProductCard from "../ProductCard/ProductCard"
import ProductCollectionHeader from "../ProductCollectionHeader/ProductCollectionHeader.jsx"
const ProductCollection = () => {
    const { products } = useDataStore();
    console.log(products);
    
    return (
    <div className="product-collection-container">
        <ProductCollectionHeader searchTerm="Tshirts"/>
        <div className={`product-list-container`}>
            {/* Product cards here */}
            {products.map((product, index) => (
            <div className="product-card-box" key={index}>
                <ProductCard product={product} key={index}/>
            </div>
            ))}
        </div>
    </div>
    )
}

export default ProductCollection
