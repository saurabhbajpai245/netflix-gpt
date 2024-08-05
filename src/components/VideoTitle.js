import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute bg-gradient-to-r from-black p-4 left-20 top-40 z-10 text-white'>
        <div className=''>
            <h1 className='font-bold text-2xl pb-4'>{title}</h1>
            <p className='w-[300px] mb-4'>{overview}</p>
        </div>
        <div>
            <button className='bg-white text-black text-lg mr-4 border-4 p-2 hover:bg-opacity-90'>Play Now</button>
            <button className='bg-black p-2 text-white text-lg border-4'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;