import React, { useEffect }from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailorVideo } from '../utils/moviesSlice';

const useMovieTrailor = (movieId) => {
    const dispatch = useDispatch();
    const getMovies = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const json = await data.json();
        const filterData = json.results.filter((data) => data.type == 'Trailer');
        const trailor = filterData[0];
        dispatch(addTrailorVideo(trailor));
    }
    useEffect(() => {
        getMovies();
    }, []);
}

export default useMovieTrailor