import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
const HomeProducts = () => {
  const { products, handleAddToCart } = useGlobalContext()
  return (
    <div>
      <div className='latest'>
        <div className='latest-head'>New Arrivals</div>
        <div className='latest-cont'>
          {products.slice(0, 3).map((item) => {
            const { id, image, name, price } = item
            return (
              <div key={id} className='latest-gallery'>
                <Link to={`/store/${name}`}>
                  <img src={image.url} alt='lg' />
                </Link>
                <div className='item'>{name}</div>
                <div className='price'>{price.formatted_with_symbol}</div>
                <button
                  onClick={() => handleAddToCart(id, 1)}
                  className='add-cart slide '>
                  ADD TO CART
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <div className='latest'>
        <div className='latest-head'>Our Most Popular </div>
        <div className='latest-cont'>
          {products.slice(4, 7).map((item) => {
            const { image, id, name, price } = item
            return (
              <div key={id} className='latest-gallery'>
                <Link to={`/store/${name}`}>
                  <img src={image.url} alt='lg' />
                </Link>

                <div className='item'>{name}</div>
                <div className='price'>{price.formatted_with_symbol}</div>
                <button
                  onClick={() => handleAddToCart(id, 1)}
                  className='add-cart slide '>
                  ADD TO CART
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeProducts
