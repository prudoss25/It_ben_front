import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfos: {
      name: "",
      role: "Ano",
    },
    firstAuthentication:false,
    authenticationDate:null,
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
        registrationNumber:"",
        name: "",
        role: "Ano",
      };
      state.authenticationDate= null;
      state.firstAuthentication=false;
      state.token = null;
      state.authenticationDate = null;
    },
    loadAuthentication: (state) => {
      state.loading = true;
    },
    updatePassword: (state) => {
      state.firstAuthentication = false
    },
    authenticate: (state, action) => {
      const user = action.payload.user;
      state.userInfos = {
        name: user.lastName + " " + user.firstName,
        role: user.role,
        registrationNumber: user.registrationNumber
      };
      state.firstAuthentication = action.payload.firstAuthentication;
      state.authenticationDate = Date.now
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
  updatePassword
} = authSlice.actions;

export default authSlice.reducer;
