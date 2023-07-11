import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState3 {
  defaultPriceCart: number
}

const initialState: CounterState3 = {
  defaultPriceCart: 0,
}

export const cardPriceCounter = createSlice({
  name: 'cardPriceCounter',
  initialState,
  reducers: {
    incrementPriceCart: (state, action: PayloadAction<number>) => {
      state.defaultPriceCart = action.payload ?? 0
    },
  },
})

// Action creators are generated for each case reducer function
//export const { decrementWish, incrementWish } = wishCounter.actions
export const { incrementPriceCart } = cardPriceCounter.actions

export default cardPriceCounter.reducer
