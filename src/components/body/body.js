import React from 'react'
import maya from '../../assets/maya.jpg'

import './body.css'
import HomeProducts from '../homeProducts/HomeProducts'

export const Body = () => {
  return (
    <div>
      <div className='we-care'>
        <div className='care'>
          <div className='care-text'>
            <div className='care-head'>
              We are tailor made to suit your fashion needs
            </div>
            <div className='care-sub'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis quos ut modi corporis harum dolores exercitationem
              accusamus illum recusandae. Ullam in nulla eveniet repellendus
              mollitia, ex facilis tempora esse quis eligendi quod adipisci
              architecto?
            </div>
            <button className='hero-btn'>SHOP NOW</button>
          </div>
          <img src={maya} alt='care' />
        </div>
      </div>
      <HomeProducts />
    </div>
  )
}
export default Body
