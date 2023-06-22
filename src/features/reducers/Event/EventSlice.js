import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';


export const eventSlice = createSlice({
    name:'event',
    initialState:{
        nexts:null,
        currents:null,
        all:null
    },
    reducers: {
        fetchEvents: (state,action) => {
            const nexts= action.payload ? [...action.payload].filter(event => moment(event.startDate).isAfter(moment())) : [];
            state.nexts = nexts;
            const currents = action.payload ? [...action.payload].filter(event => moment(event.startDate).isSameOrBefore(moment()) && moment(event.endDate).isSameOrAfter(moment())) : [];
            state.currents = currents
            const all = action.payload ? [...action.payload] : []
            state.all = all
        }
    }
})
export const { fetchEvents } = eventSlice.actions;

export default eventSlice.reducer;