import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  defaultWish: number
}

const initialState: CounterState = {
  defaultWish: 0,
}

export const wishCounter = createSlice({
  name: 'wishCounter',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.defaultWish = action.payload ?? 0
    },
  },
})

// Action creators are generated for each case reducer function
//export const { decrementWish, incrementWish } = wishCounter.actions
export const { incrementByAmount } = wishCounter.actions

export default wishCounter.reducer
