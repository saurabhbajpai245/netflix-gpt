import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCart = ({posterPath}) => {
  return (
    <div className='w-42'>
        <img style={{minWidth: '142px',padding: '0 2px'}} src={IMG_CDN+posterPath} alt='movie cart' />
    </div>
  )
}

export default MovieCart