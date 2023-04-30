import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfos: {
      name: "",
      role: "Ano",
    },
    firstAuthentication:false,
    authenticated:false,
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
      state.firstAuthentication=false;
      state.authenticated = false;
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
        registrationNumber: user.registrationNumber,
        emailAdress: user.emailAdress
      };
      state.firstAuthentication = action.payload.firstAuthentication;
      state.authenticated = true;
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
