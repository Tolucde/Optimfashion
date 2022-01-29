import React from 'react'
import Items from '../items/Items'
import './menu.css'
const Menu = ({ shopItems }) => {
  return <Items items={shopItems} />
}

export default Menu
