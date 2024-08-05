import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainContainer = () => {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    // Initially before movies data fetch into store it was null
    // So to save the component to break we used it like this
    
    if(movies == null){
        return;
    }
    
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
    return (
    <div className='relative'>
        <VideoTitle  title={original_title} overview={overview}/>
        <VideoBackground id={id} />
    </div>
  )
}

export default MainContainer