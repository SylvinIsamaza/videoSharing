import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    user: null,
    loading: false,
    login: false,
    error: false
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSucces: (state, action) => {
            state.loading = false,
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.login = false,
            state.error = true;
        },
        
    }
})
export const {loginStart, loginSucces, loginFailure} = userSlice.actions

export default userSlice.reducer
