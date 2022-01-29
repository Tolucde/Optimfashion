import React from 'react'
import './mwcateg.css'
import maya from '../../assets/maya.jpg'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import category from '../category/Category'
const cat = ['Men', 'Women', 'Children']
const Mwcateg = () => {
  return (
    <div className='mwc'>
      <div className='mwc1'>
        {cat.map((cats) => (
          <div className='mwc2'>
            <Link to={`category/${cats}`}>
              <img src={maya} alt={cats} />
              <div className='mwc3'>{cats}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mwcateg
