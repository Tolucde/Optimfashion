import { useGlobalContext } from '../../context'
import Close from '@material-ui/icons/CloseOutlined'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CartItems from '../cartItems/cartItems'
import './cart.css'
const Cart = () => {
  const { shoppingCart, emptyCart } = useGlobalContext()
  if (!shoppingCart.line_items) {
    return <div>Loading..</div>
  }
  return (
    <div className='cart1'>
      <div className='cart-section'>
        <div className='cart-cont'>
          <div className='cart-head'>
            Your shopping Cart
            <div className='close'>
              <Close />
            </div>
          </div>

          <div className='cart-innerCont'>
            {!shoppingCart.line_items ? (
              <h4>YOUR CART IS EMPTY!!</h4>
            ) : (
              <ul className='cart-ul'>
                {shoppingCart.line_items.map((item) => (
                  <CartItems key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='cart-total'>
            <div>
              <Link to='shop'>
                <Button variant='contained'>Go back to Shop</Button>
              </Link>
            </div>
            <div>Cart Total:</div>
            <div className='total'>
              {shoppingCart.subtotal.formatted_with_symbol}
            </div>
          </div>
          <div className='button__container'>
            <Button
              color='secondary'
              variant='contained'
              type='button'
              onClick={emptyCart}>
              CLEAR CART
            </Button>
            <Link to='/checkout'>
              <Button
                color='primary'
                variant='contained'
                type='button'
                classname='checkout'>
                CHECKOUT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
