import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import './items.css'
const Items = ({ items }) => {
  const { handleAddToCart } = useGlobalContext()
  return (
    <div className='shop-items'>
      {items.map((item) => (
        <div key={item.id} className='prod'>
          <Link to={`/store/${item.name}`}>
            <img src={item.image.url} alt={item.name} />
          </Link>
          <button
            onClick={() => handleAddToCart(item.id, 1)}
            className='add-cart slide'>
            ADD TO CART
          </button>
          <div className='prod-info'>
            <h4 className='name'>{item.name}</h4>
            <h4 className='price'>{item.price.formatted_with_symbol}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Items
