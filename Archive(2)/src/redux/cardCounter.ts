import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState2 {
  defaultCart: number
}

const initialState: CounterState2 = {
  defaultCart: 0,
}

export const cardCounter = createSlice({
  name: 'cardCounter',
  initialState,
  reducers: {
    incrementCart: (state, action: PayloadAction<number>) => {
      state.defaultCart = action.payload ?? 0
    },
  },
})

// Action creators are generated for each case reducer function
//export const { decrementWish, incrementWish } = wishCounter.actions
export const { incrementCart } = cardCounter.actions

export default cardCounter.reducer
