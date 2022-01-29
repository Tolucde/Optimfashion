import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-action'>
          <h3>Don't Miss Out</h3>
          <p>
            Sign up to receive notifications on the trendiest products, fashion
            news and coupons
          </p>
          <form>
            <input
              className='footer-email'
              type='email'
              placeholder='Email Address'
            />
            <button className='signup-btn btn'>SIGN UP</button>
            <p>
              By signing up you understand and agree that your data will be
              collected and used subject to our Privacy Policy and Terms of Use
            </p>
          </form>
        </div>
        <div className='footer-list'>
          <div className='footer-list-item'>
            <h4>COMPANY</h4>
            <h6>About</h6>
            <h6>Experts and spokemodels</h6>
          </div>
          <div className='footer-list-item'>
            <h4>CUSTOMER SERVICE</h4>
            <h6>Contact us</h6>
            <h6>My Account</h6>
            <h6>Store Locator</h6>
            <h6>Redeem rewards</h6>
          </div>
          <div className='footer-list-item'>
            <h4>MORE TO COME</h4>
            <h6>Fashion magazine</h6>
            <h6>Consultations</h6>
            <h6>Offers</h6>
          </div>
        </div>
      </div>
      <div className='socials'>
        <Instagram className='socials_icon' />
        <Facebook className='socials_icon' />
        <Twitter className='socials_icon' />
        <YouTube className='socials_icon' />
      </div>
    </div>
  )
}

export default Footer
