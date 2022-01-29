import React from 'react'
import { useGlobalContext } from '../../context'
import './product.css'
const Product = ({ itemInfo }) => {
  console.log(itemInfo)
  const { handleAddToCart } = useGlobalContext()
  return (
    <div key={itemInfo.id} className='product'>
      <img src={itemInfo.media.source} alt={itemInfo.name} />
      <div className='product-info'>
        <div className='name'>{itemInfo.name}</div>
        <div className='price'>{itemInfo.price.formatted_with_symbol}</div>
        <div className='desc'>
          {itemInfo.description.replace(/(<([^>]+)>)/gi, '')}
        </div>
        <div className='product-btn'>
          <button
            onClick={() => handleAddToCart(itemInfo.id, 1)}
            className='add-cart btn'>
            ADD TO CART
          </button>
          <button className='purchase btn'>PURCHASE NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Product
