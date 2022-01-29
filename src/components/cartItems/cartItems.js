import { useGlobalContext } from '../../context'
import './cartItems.css'
import { Button, Typography } from '@material-ui/core'
import Close from '@material-ui/icons/CloseOutlined'
import Inc from '@material-ui/icons/ArrowDropUp'
import Dec from '@material-ui/icons/ArrowDropDown'

const CartItems = ({ item }) => {
  const { updateQty, removeItem } = useGlobalContext()

  return (
    <li className='cart__item'>
      <img src={item.media.source} alt={item.name} />
      <div className='cart__item__name'>{item.name}</div>
      <div className='inc-dec'>
        <Button
          className='increase'
          size='small'
          variant='contained'
          color='default'
          onClick={() => updateQty(item.id, item.quantity + 1)}>
          <Inc />
        </Button>
        <Typography variant='subtitle1' className='number'>
          {item.quantity}
        </Typography>
        <Button
          variant='contained'
          color='default'
          size='small'
          className='increase'
          onClick={() => updateQty(item.id, item.quantity - 1)}>
          <Dec />
        </Button>
      </div>
      <div className='price'>{item.price.formatted_with_symbol}</div>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => removeItem(item.id)}>
        <Close />
      </Button>
    </li>
  )
}

export default CartItems
