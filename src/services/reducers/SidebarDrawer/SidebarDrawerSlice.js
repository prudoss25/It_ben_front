import { createSlice } from '@reduxjs/toolkit';

export const sidebarDrawerSlice = createSlice({
    name:'sidebarDrawer',
    initialState:{
        value:false
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value 
        }
    }
})
export const { toggle } = sidebarDrawerSlice.actions;

export default sidebarDrawerSlice.reducer;