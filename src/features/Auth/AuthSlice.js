import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name:'auth',
    initialState:{
        userInfos:{
            name:"",
            role:""
        },
        token:null,
    },
    reducers: {
        disconnect: (state) => {
            console.log('test again')
            setTimeout(() => {
                state = {
                    userInfos:{
                        name:"",
                        role:""
                    },
                    token:null,
                }
            },120000)
        },
        authenticate: (state,action) => {
            const user = action.payload.user ;
            state.userInfos = {
                name:user.lastName+" "+user.firstName,
                role:user.role
            };
            state.token = action.payload.token
            disconnect()
        }
    }
})
export const { authenticate,disconnect } = authSlice.actions;

export default authSlice.reducer;