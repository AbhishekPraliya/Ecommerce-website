import "./ProductPage.css"
import ProductSlider from "../../Components/ProductSlider/ProductSlider.jsx"
import ProductImageContainer from '../../Components/ProductImageContainer/ProductImageContainer'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'

const ProductPage = () => {
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