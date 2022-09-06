import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';


export const eventSlice = createSlice({
    name:'event',
    initialState:{
        nexts:[],
        currents:[],
        all:[]
    },
    reducers: {
        fetchEvents: (state,action) => {
            console.log("EVENT_BUG_FETCH",moment(action.payload[0].startDate),moment(action.payload[0].startDate).isAfter(moment()))
            const nexts= action.payload ? [...action.payload].filter(event => moment(event.startDate).isAfter(moment())) : [];
            state.nexts = nexts;
            const currents = action.payload ? [...action.payload].filter(event => moment(event.startDate).isSameOrBefore(moment()) && moment(event.endDate).isSameOrAfter(moment())) : [];
            state.currents = currents
            const all = action.payload ? [...action.payload] : []
            state.all = all
            console.log("EVENT_BUG_FETCH State",nexts,currents,all)
        }
    }
})
export const { fetchEvents } = eventSlice.actions;

export default eventSlice.reducer;