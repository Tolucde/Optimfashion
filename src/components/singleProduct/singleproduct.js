import React from 'react'
import { useParams } from 'react-router-dom'
import Product from '../product/product'
import { useGlobalContext } from '../../context'
import './singleProduct.css'
const SingleProduct = () => {
  const { products } = useGlobalContext()
  const { name } = useParams()
  const itemInfo = products.find((item) => item.name === name)
  console.log(itemInfo)
  // const [sinProd, setSinProd] = useState(product)
  return (
    <>
      <div className='singleProductHero'>
        <img src={itemInfo.media.source} alt='productHero' />
        <div className='singleProductName'>{name}</div>
      </div>
      <Product itemInfo={itemInfo} />
    </>
  )
}

export default SingleProduct

// sinProd={sinProd} setSinProd={setSinProd}
