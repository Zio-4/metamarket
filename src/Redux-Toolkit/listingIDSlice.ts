import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface IlistingInCart {
    listingId: number
    image: string
    title: string
    price: number
}

const parseStorage = JSON.parse(localStorage.getItem('cart') || '')
const listingIds: number[] = []
parseStorage.forEach((item: IlistingInCart) => listingIds.push(item.listingId))

export interface listingIDState {
    ids: number[]
}

const initialState: listingIDState = {
    ids: listingIds
}

export const listingIDSlice = createSlice({
    name: 'listingIds',
    initialState,
    reducers: {
      addId: (state, action: PayloadAction<number>) => {
        // state.ids = [
        //     ...state.ids,
        //     action.payload
        // ]
        state.ids.push(action.payload)
      },
      removeId: (state, action: PayloadAction<number>) => {
        state.ids.filter(id => id !== action.payload)
      },
    },
})

export const { addId, removeId, } = listingIDSlice.actions

export const selectCount = (state: RootState) => state.listingID.ids

export default listingIDSlice.reducer