import React from 'react'
import loadingGif from './gif/loading-arrow.gif'
const loading = () => {
  return (
    <div className='loading'>
      <h4>Rooms Loading...</h4>
      <img src={loadingGif} alt='loading' />
    </div>
  )
}

export default loading
