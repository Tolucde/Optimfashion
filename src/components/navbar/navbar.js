import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '../../data'
import CartNav from '../cartNav/cartNav'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-items'>
        <div className='logo'>Optimfashion...</div>
        <div className='nav-links'>
          {links.map((link) => {
            const { id, url, text } = link
            return (
              <div key={id} className='link'>
                <Link className='btn' to={url}>
                  {text}
                </Link>
              </div>
            )
          })}
        </div>
        <div className='log-sign'>
          <CartNav />
        </div>
      </div>
    </div>
  )
}
export default Navbar
