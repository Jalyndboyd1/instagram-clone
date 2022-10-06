import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/counterSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})