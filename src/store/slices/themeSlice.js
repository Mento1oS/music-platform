import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState:{
        currentTheme:{},
        isSkeleton: true
    },
    reducers:{
        setCurrentTheme(state, action){
            state.currentTheme = action.payload;
        },
        setIsSkeleton(state, action){
            state.isSkeleton = action.payload;
        }
    }
});

export const {setCurrentTheme, setIsSkeleton} = themeSlice.actions;

export default themeSlice.reducer;