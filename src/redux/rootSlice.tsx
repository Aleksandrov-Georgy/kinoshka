import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilmType } from '../../types/filmType'


export interface rootSliceType {
  films: FilmType[],
  cartoons: FilmType[],
}

const initialState: rootSliceType = {
  films: [],
  cartoons: [],
}

export const rootSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilms: (state, action: PayloadAction<any>) => {
      state.films = [...state.films,...action.payload];
    },
    addCartoons: (state, action: PayloadAction<any>) => {
      state.cartoons = [...state.cartoons,...action.payload];
    },
    
  },
})

export const { addFilms, addCartoons } = rootSlice.actions

export default rootSlice.reducer