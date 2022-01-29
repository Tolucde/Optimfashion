import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import Carticon from '@material-ui/icons/ShoppingBasketOutlined'

const CartNav = () => {
  const location = useLocation()
  const { shoppingCart } = useGlobalContext()
  return (
    <>
      {location.pathname !== '/cart' && (
        <div className='cart'>
          <Link to='cart'>
            <div className='class-icon'>
              <Carticon />
            </div>
            {shoppingCart.total_items > 0 ? (
              <div className='item-count'>
                <span>{shoppingCart.total_items}</span>
              </div>
            ) : (
              <span></span>
            )}
          </Link>
        </div>
      )}
    </>
  )
}

export default CartNav
