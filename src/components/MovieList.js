import React from 'react'
import MovieCart from './MovieCart'

const MovieList = ({title, movies}) => {
    if(!movies){
        return;
    }
  return (
    <div className='p-1.5 bg-black'>
        <div>
            <h1 className='text-2xl text-lg text-white py-1'>{title}</h1>
        </div>
        <div className='flex overflow-x-auto'>
        {
            movies.map((data) => {
                return <MovieCart key={data.id} posterPath={data?.poster_path} />
            })
        }
        </div>
    </div>
  )
}

export default MovieList