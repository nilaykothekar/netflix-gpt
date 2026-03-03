import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showSearch: false,
    },
    reducers: {
        toggleSearch: (state) => {
            state.showSearch = !state.showSearch;
        }
    }
});

export const { toggleSearch } = gptSlice.actions;
export default gptSlice.reducer;