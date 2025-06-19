import React from 'react'
import ProductImageContainer from '../../Components/ProductImageContainer/ProductImageContainer'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'

const ProductPage = () => {
  return (
    <div className='product-container'>
        <ProductImageContainer/>
        <ProductDetail/>
    </div>
  )
}

export default ProductPage