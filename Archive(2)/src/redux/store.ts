//////////////////////////////////////////////////////////////////////////

import { configureStore } from '@reduxjs/toolkit'
import languageSwitcher from './languageSwitcher'
import wishCounter from './wishCounter'
import cardCounter from './cardCounter'
import cardPriceCounter from './cardPriceCounter'

export const store = configureStore({
  reducer: {
    lngSwitcher: languageSwitcher,
    wishCounter: wishCounter,
    cardCounter: cardCounter,
    cardPriceCounter: cardPriceCounter,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
