import React from 'react'
import { useGlobalContext } from '../../context'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import { Link } from 'react-router-dom'
import Review from './review'
import { Typography, Button, Divider } from '@material-ui/core'

const PaymentForm = ({ checkoutToken }) => {
  const { nextStep, backStep, shippingData } = useGlobalContext()

  const productsAmount = parseFloat(
    checkoutToken.live.subtotal.formatted.replace(',', '')
  )
  console.log(productsAmount)

  const config = {
    public_key: process.env.REACT_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: productsAmount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: shippingData.email,
      phonenumber: '07064586146',
      name: shippingData.firstName,
    },
    customizations: {
      title: 'Optim Fashion',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  }

  const handleFlutterPayment = useFlutterwave(config)

  return (
    <div>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>
        Payment Method
      </Typography>
      <Button onClick={backStep} variant='outlined'>
        Back
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response)
              closePaymentModal()
            },
            onClose: () => {},
          })
        }}></Button>
      <div
        style={{ backgroundColor: 'red', padding: '3px', borderRadius: '5px' }}
        className='back-shop'>
        <Link to='/shop'>Back to shop</Link>
      </div>
    </div>
  )
}

export default PaymentForm
