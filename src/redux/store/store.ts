import { configureStore } from '@reduxjs/toolkit'
import  rootSlice from '../rootSlice'

export const store = configureStore({
  reducer: {
    films: rootSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch