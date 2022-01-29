import React, { useRef, useState, useEffect } from 'react'
import Menu from '../menu/menu'
import { useGlobalContext } from '../../context'
import './roomsfilter.css'
const RoomsFilter = () => {
  const { products } = useGlobalContext()
  const priceRef = useRef(null)
  const [price, setPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [minPrice, setMinPrice] = useState()
  const [shopItems, setShopItems] = useState(products)

  const handleChange = () => {
    let priceChange = priceRef.current.value
    setPrice(priceChange)
    // setMaxPrice(

    setMaxPrice(
      Math.max(
        ...products.map((item) =>
          parseFloat(item.price.formatted.replace(',', ''))
        )
      )
    )

    setMinPrice(
      Math.min(
        ...products.map((item) =>
          parseFloat(item.price.formatted.replace(',', ''))
        )
      )
    )

    let filterPrice = [...products].filter(
      (item) => parseFloat(item.price.formatted.replace(',', '')) <= priceChange
    )
    setShopItems(filterPrice)
  }
  useEffect(() => {
    setPrice(10500)
    setShopItems(products)
  }, [])

  return (
    <>
      <div className='rooms-filter'>
        <label htmlFor='price'>ROOM PRICE N{price}.00</label>
        <input
          type='range'
          name='price'
          min={minPrice}
          max={maxPrice}
          ref={priceRef}
          id='price'
          value={price}
          onChange={handleChange}
          className='form-control'
        />
      </div>
      <Menu shopItems={shopItems} />
    </>
  )
}
export default RoomsFilter
