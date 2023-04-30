import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    all: null,
    currentUser: null,
    entrepreneurs: null,
  },
  reducers: {
    fetchUsers: (state, action) => {
      state.all = action.payload && [...action.payload];
    },
    getEntrepreneurs: (state, action) => {
        state.entrepreneurs = action.payload && [...action.payload];
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    reinitialiseCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { fetchUsers, setCurrentUser, reinitialiseCurrentUser,getEntrepreneurs } =
  userSlice.actions;

export default userSlice.reducer;
