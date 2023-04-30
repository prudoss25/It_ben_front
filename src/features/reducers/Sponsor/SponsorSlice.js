import { createSlice } from '@reduxjs/toolkit';

export const sponsorSlice = createSlice({
    name:'sponsor',
    initialState:{
        all:[]
    },
    reducers: {
        fetchSponsors: (state,action) => {
            state.all = action.payload ? [...action.payload] : [] 
        }
    }
})
export const { fetchSponsors } = sponsorSlice.actions;

export default sponsorSlice.reducer;