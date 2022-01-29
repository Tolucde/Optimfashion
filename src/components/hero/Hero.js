import React from 'react'
import maya from '../../assets/maya.jpg'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <div className='hero-head'>Trendy, Confident and Exclusive...</div>
        <div className='hero-sub'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          temporibus commodi quae corrupti non autem totam accusantium
        </div>
        <button className='hero-btn btn'>Shop Now</button>
      </div>
      <img className='hero-image' src={maya} alt='hero' />
    </div>
  )
}

export default Hero
