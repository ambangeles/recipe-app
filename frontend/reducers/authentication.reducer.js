import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "",
}

export const AuthenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        loginUserSuccess: (state, { payload }) => {
            state.user = payload;
        },
        signUpUserSuccess: (state, { payload }) => {
            state.user = payload;
        },
        checkUserSuccess: (state, { payload }) => {
            state.user = payload;
        },
        signOutUserSuccess: (state) => {
            state.user = "";
        },
    }
})

export const authenticationActions = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;