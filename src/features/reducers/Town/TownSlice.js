import { createSlice } from '@reduxjs/toolkit';

export const townSlice = createSlice({
    name:'town',
    initialState:{
        all:[]
    },
    reducers: {
        fetchTowns: (state,action) => {
            state.all = action.payload ? [...action.payload] : [] 
        }
    }
})
export const { fetchTowns } = townSlice.actions;

export default townSlice.reducer;