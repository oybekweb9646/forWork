import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    rights: [],
    modules: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action) => ({
            isAuth: true,
            ...action.payload
        })
    }
});

export const { setAuth, setUser } = userSlice.actions;

export default userSlice.reducer;
