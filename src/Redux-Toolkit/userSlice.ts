import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

let userInfo = {username: '', userId: '', email: '', stripeId: '', sold: [], owned: [], favorited: [], chargesEnabled: false}
if (localStorage.getItem('userInfo')) {
  userInfo = JSON.parse(localStorage.getItem('userInfo') || '')
}

export interface IuserState {
    currentUser: {
      favorited: any[]
      userId: string
      username: string
      stripeId: string
      chargesEnabled: boolean,
      sold: any[],
      owned: any[],
      email: string
    }
}


const initialState: IuserState = {
    currentUser: userInfo
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setCurrentUser: (state, action: PayloadAction<IuserState['currentUser']>) => {
        console.log('Payload in userSlice: ', action.payload)
        // state.currentUser = {username: action.payload.username, userId: '', email: '', stripeId: '', sold: [], owned: [], favorited: [], chargesEnabled: false}
        state.currentUser = action.payload
      }, 
      removeCurrentUser: (state) => {
        state.currentUser = {username: '', userId: '', email: '', stripeId: '', sold: [], owned: [], favorited: [], chargesEnabled: false}
      },
    },
})

export const { setCurrentUser, removeCurrentUser, } = userSlice.actions

export const userState = (state: RootState) => state.user.currentUser

export default userSlice.reducer