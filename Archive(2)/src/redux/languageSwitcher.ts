//////////////////////////////////////////////////////////////////////////////

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LangString {
  value: string
}

const initialState: LangString = {
  defaultLang: 'en',
}

export const languageSwitcher = createSlice({
  name: 'languageSwitcher',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSwitcher.actions

export default languageSwitcher.reducer
