import React from 'react'
import maya from '../../assets/maya.jpg'
import './about.css'
const About = () => {
  return (
    <>
      <div className='about'>
        <div className='about-hero'>
          <span className='trendy'>TRENDY</span>
          <span className='confident'>CONFIDENT</span>
          <span className='trendy'>EXCLUSIVE.</span>
        </div>
        <div className='about-text'>
          <div className='about-left'>
            <h2 className='about-head'>ABOUT US</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              dignissimos vel distinctio doloremque, impedit repellat ut
              asperiores numquam blanditiis hic iusto nesciunt qui eum ipsam,
              provident fuga reprehenderit velit eligendi repellat ut asperiores
              numquam blanditiis hic iusto nesciunt qui eum ipsam, provident
              fuga reprehenderit velit eligendi.
            </p>
            <button className='hero-btn btn'>SHOP NOW</button>
          </div>
          <div className='about-image'>
            <img src={maya} alt='aboutimage' />
          </div>
        </div>
        <div className='about-text2'>
          <div className='about-left2'>
            <h2 className='about-head'>OUR QUALITIES</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              dignissimos vel distinctio doloremque, impedit repellat ut
              asperiores numquam blanditiis hic iusto nesciunt qui eum ipsam,
              provident fuga reprehenderit velit eligendi repellat ut asperiores
              numquam blanditiis hic iusto nesciunt qui eum ipsam, provident
              fuga reprehenderit velit eligendi.
            </p>
            <button className='hero-btn quality btn'>SHOP NOW</button>
          </div>
          <div className='about-image2'>
            <div className='image-grid'>
              <img src={maya} alt='aboutimage' />
              <img src={maya} alt='aboutimage' />
            </div>
            <div className='image-grid'>
              <img src={maya} alt='aboutimage' />
              <img src={maya} alt='aboutimage' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
