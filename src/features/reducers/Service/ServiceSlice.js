import { createSlice } from "@reduxjs/toolkit";


export const serviceSlice = createSlice({
    name:'service',
    initialState:{
        all: null,
        currentService: null
    },
    reducers: {
        fetchServices: (state,action) => {
            state.all = action.payload && [...action.payload];
        },
        deleteService: (state,action) => {
            state.all = [state.all].filter(service => service.idService !== action.payload);
        },
        addService: (state,action) => {
            state.all = [...state.all, action.payload];
        },
        setCurrentService: (state,action) => {
            state.currentService = action.payload
        },
        reinitialiseCurrentService: (state) => {
            state.currentService = null
        }
    }
})

export const { fetchServices, setCurrentService, reinitialiseCurrentService, addService,deleteService } = serviceSlice.actions;

export default serviceSlice.reducer;