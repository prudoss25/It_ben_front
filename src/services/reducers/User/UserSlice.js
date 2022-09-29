import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:'user',
    initialState:{
        all: null,
        currentUser: null
    },
    reducers: {
        fetchUsers: (state,action) => {
            state.all = action.payload && [...action.payload]
        },
        setCurrentUser: (state,action) => {
            state.currentUser = action.payload
        },
        reinitialiseCurrentUser: (state) => {
            state.currentUser = null
        }
    }
})

export const { fetchUsers, setCurrentUser, reinitialiseCurrentUser } = userSlice.actions;

export default userSlice.reducer;