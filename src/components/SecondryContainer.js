import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondryContainer = () => {
  
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Popular'} movies={movies.popularrMovies} />
      <MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Upcoming'} movies={movies.nowPlayingMovies} /> 

    </div>
  )
}

export default SecondryContainer