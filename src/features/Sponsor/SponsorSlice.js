import { createSlice } from '@reduxjs/toolkit';

export const sponsorSlice = createSlice({
    name:'sponsor',
    initialState:{
        value:[]
    },
    reducers: {
        fetchSponsors: (state,action) => {
            state.value = action.payload ? [...action.payload] : [] 
        }
    }
})
export const { fetchSponsors } = sponsorSlice.actions;

export default sponsorSlice.reducer;