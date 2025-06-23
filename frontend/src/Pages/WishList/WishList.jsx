import React from 'react'
import "./WishList.css"
import ProductCard from "../../Components/ProductCard/ProductCard.jsx"
import { useDataStore } from '../../Store/useDataStore.js';
import { ShoppingBag, Trash2 } from 'lucide-react';

const WishList = () => {
      const { products } = useDataStore();

  return (
    <div className="product-collection-container">
        <div className='wishlist-heading-container'>
            <span className="wishlist-term">WishList</span>
            <span className="wishlist-item-count">(20 Items)</span>
        </div>
        <div className={`product-list-container wish-list-item`}>
            {/* Product cards here */}
            {products.map((product, index) => (
            <div className="product-card-box" key={index}>
                <ProductCard product={product} key={index} WishListActive={true}/>
                <div className="w-l-card-bottom">
                    <button className="w-l-delete w-l-button"><Trash2 size={18}/></button>
                    <button className="w-l-add-to-card w-l-button">Add To Cart <ShoppingBag size={18}/></button>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default WishList