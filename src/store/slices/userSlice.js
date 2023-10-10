import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: {
            mail: '',
            password: '',
            password__double: ''
        },
        isToPass: false,
        accessToken: '',
        refreshToken: '',
        signIn: {
            mail: '',
            password: ''
        }
    },
    reducers:{
        setIsToPass(state, action){
            state.isToPass = action.payload;
        },
        setSignIn(state, action){
            state.signIn = {
                mail: action.payload.mail,
                password: action.payload.password
            };
        },
        setAccessToken(state, action){
            state.accessToken = action.payload;
        },
        setRefreshToken(state, action){
            state.refreshToken = action.payload;
        },
        setUser(state, action){
            state.user ={
                mail: action.payload.mail,
                password: action.payload.password,
                password__double: action.payload.password__double
            };
        }
    }
});

export const {setIsToPass, setSignIn, setAccessToken, setRefreshToken, setUser} = userSlice.actions;

export default userSlice.reducer;