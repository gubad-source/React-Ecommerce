//////////////////////////////////////////////////////////////////////////

import { configureStore } from '@reduxjs/toolkit'
import languageSwitcher from './languageSwitcher'
import wishCounter from './wishCounter'

export const store = configureStore({
  reducer: {
    lngSwitcher: languageSwitcher,
    wishCounter: wishCounter,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
