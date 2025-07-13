import "./ProductPage.css"
import ProductSlider from "../../Components/ProductSlider/ProductSlider.jsx"
import ProductImageContainer from '../../Components/ProductImageContainer/ProductImageContainer'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import { useEffect, useState } from "react"
import { useLocation} from "react-router-dom"

const ProductPage = () => {
  
  const location = useLocation();
  const [productId, setProductId] = useState("");
    
    

    function extractProductIdFromPath(pathname) {
        if (!pathname || typeof pathname !== "string") return null;

        // Expecting format: /product/p-name--product-id
        const lastSegment = pathname.split("/").pop();
        const parts = lastSegment.split("--");
        return parts.length > 1 ? parts[1] : null;
    }

    useEffect(() => {
      const id = extractProductIdFromPath(location.pathname);
      setProductId(id);
      console.log("productId=",productId);

      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);



  return (
    <div className='product-box'>
      <div className='product-container'>
        <section className="product-image-container">
          <ProductImageContainer/>
        </section>
        <section className="product-details-component">
          <ProductDetail/>
        </section>
      </div>
      <ProductSlider/>
    </div>
  )
}

export default ProductPage