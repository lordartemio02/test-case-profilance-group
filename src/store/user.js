import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthorized: false,
    username: "гость"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorized: (state, action) => {
            state.username = action.payload
            state.isAuthorized = !state.isAuthorized
        },
    },
})

export const { authorized } = userSlice.actions

export default userSlice.reducer