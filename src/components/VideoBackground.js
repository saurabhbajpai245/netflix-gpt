import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailor from '../customHook/useMovieTrailor';

// fetching trailor video and updating the trailor in store

const VideoBackground = ({id}) => {
    const trailorVideo = useSelector((store) => store.movies?.trailorVideo)
    useMovieTrailor(id);
  return (
    <div className='absolute top-0'>  
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + trailorVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}
 
export default VideoBackground