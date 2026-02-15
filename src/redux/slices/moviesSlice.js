import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        trailer: {}
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setTrailer: (state, action) => {
            state.trailer = action.payload;
        }
    }
});

export default moviesSlice.reducer;
export const { addNowPlayingMovies, setTrailer } = moviesSlice.actions;