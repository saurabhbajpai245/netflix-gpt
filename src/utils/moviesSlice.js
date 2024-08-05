import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        popularrMovies : null,
        trailorVideo : null
    },
    reducers : { 
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailorVideo: (state, action) => {
            state.trailorVideo = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularrMovies = action.payload
        }
    },
});

export const { addNowPlayingMovies, addTrailorVideo, addPopularMovies } = moviesSlice.actions;
export default moviesSlice.reducer; 