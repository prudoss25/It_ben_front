import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfos: {
      name: "",
      role: "Ano",
    },
    token: null,
    fail: false,
    loading: false,
    success: false,
  },
  reducers: {
    failAuthentication: (state) => {
      state.fail = true;
    },
    disconnect: (state) => {
      state.userInfos = {
        name: "",
        role: "Ano",
      };
      state.token = null
    },
    loadAuthentication: (state) => {
      state.loading = true;
    },
    authenticate: (state, action) => {
      const user = action.payload.user;
      state.userInfos = {
        name: user.lastName + " " + user.firstName,
        role: user.role,
      };
      state.token = action.payload.token;
      state.fail = false;
      state.loading = false;
      state.success = false;
    },
  },
});
export const {
  authenticate,
  disconnect,
  failAuthentication,
  loadAuthentication,
} = authSlice.actions;

export default authSlice.reducer;
