import { createSlice } from '@reduxjs/toolkit';

export const townSlice = createSlice({
    name:'town',
    initialState:{
        value:[]
    },
    reducers: {
        fetchTowns: (state,action) => {
            state.value = action.payload ? [...action.payload] : [] 
        }
    }
})
export const { fetchTowns } = townSlice.actions;

export default townSlice.reducer;