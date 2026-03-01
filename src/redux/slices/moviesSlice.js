import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        popularMovies: [],
        upcomingMovies: [],
        topRatedMovies: [],
        trailer: {}
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        setTrailer: (state, action) => {
            state.trailer = action.payload;
        }
    }
});

export default moviesSlice.reducer;
export const { addNowPlayingMovies, setTrailer, addPopularMovies, addUpcomingMovies, addTopRatedMovies } = moviesSlice.actions;