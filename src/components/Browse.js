import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHook/useNowPlayingMovies';
import usePopularMoveis from '../customHook/usePopularMovies';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
  
    useNowPlayingMovies();
    usePopularMoveis();

  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
    </div>
  )
}

export default Browse