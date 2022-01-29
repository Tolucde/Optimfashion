import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { commerce } from '../lib/commerce'
import {
  Paper,
  Typography,
  CssBaseline,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Button,
  Divider,
} from '@material-ui/core'
import PaymentForm from '../components/checkout/paymentForm'
import AddressForm from '../components/checkout/addressForm'
import { useGlobalContext } from '../context'
import useStyles from './checkout/styles'
const Checkout = () => {
  const classes = useStyles()
  const history = useHistory()
  const { error, order, shoppingCart, steps, activeStep } = useGlobalContext()
  const [checkoutToken, setCheckoutToken] = useState(null)

  useEffect(() => {
    if (shoppingCart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(shoppingCart.id, {
            type: 'cart',
          })
          console.log(token)
          setCheckoutToken(token)
        } catch {
          if (activeStep !== steps.length) history.push('/')
        }
      }

      generateToken()
    }
  }, [shoppingCart])

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant='h5'>
            Thank you for your purchase, {order.customer.firstname}
            {order.customer.lastname}!
          </Typography>
          <Divider />
          <Typography variant='subtitle2'>
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} variant='outlined' type='button' to='/'>
          Back to home
        </Button>
      </>
    ) : (
      <div>
        <CircularProgress />
      </div>
    )
  if (error) {
    Confirmation = () => (
      <>
        <Typography variant='h5'>Error: {error}</Typography>
        <br />
        <Button component={Link} variant='outlined' type='button' to='/'>
          Back to home
        </Button>
      </>
    )
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm checkoutToken={checkoutToken} />
    )

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar}></div>
      <main className={classes.layout}>
        <Paper>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  )
}

export default Checkout
