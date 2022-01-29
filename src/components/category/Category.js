import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import Items from '../items/Items'
import './category.css'
const Category = () => {
  const { products } = useGlobalContext()
  const { name } = useParams()
  const subCateg = products.filter((item) => item.categories[0].name === name)
  let cat1 = name === 'Men' ? 'Women' : 'Men'
  let cat2 = name === 'Children' ? 'Women' : 'Children'
  return (
    <>
      <div className='categories'>
        <Link to={`/category/${cat1}`}>
          <h4 className='categories-h4 btn'>{cat1}</h4>
        </Link>
        <h1>{name}</h1>
        <Link to={`/category/${cat2}`}>
          <h4 className='categories-h4 btn'>{cat2}</h4>
        </Link>
      </div>
      <Items items={subCateg} />
    </>
  )
}

export default Category
