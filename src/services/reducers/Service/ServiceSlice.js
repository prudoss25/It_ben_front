import { createSlice } from "@reduxjs/toolkit";


export const serviceSlice = createSlice({
    name:'service',
    initialState:{
        all: null,
        currentService: null
    },
    reducers: {
        fetchServices: (state,action) => {
            state.all = action.payload && [...action.payload]
        },
        setCurrentService: (state,action) => {
            state.currentService = action.payload
        },
        reinitialiseCurrentService: (state) => {
            state.currentService = null
        }
    }
})

export const { fetchServices, setCurrentService, reinitialiseCurrentService } = serviceSlice.actions;

export default serviceSlice.reducer;