import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface userState {
    currentUser: {}
}

const initialState: userState = {
    currentUser: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setCurrentUser: (state, action: PayloadAction<object>) => {
        state.currentUser = action.payload
      },
      removeCurrentUser: (state) => {
        state.currentUser = {}
      },
    },
})

export const { setCurrentUser, removeCurrentUser, } = userSlice.actions

export const userState = (state: RootState) => state.user.currentUser

export default userSlice.reducer