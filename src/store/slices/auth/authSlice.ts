import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { AuthState } from './authTypes'
import { AppDispatch, RootState } from 'store';

const initialState: AuthState = {
    isLoggedIn: false,
    newUser: true,
    token: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = true;
            state.token = 'abc'
        },
        logOut(state, action) {
            state.isLoggedIn = false;
            state.token = ''
        }
    }
});

export const { logOut, logIn } = authSlice.actions

export default authSlice.reducer