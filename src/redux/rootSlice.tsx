import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilmType } from '../../types/filmType'


export interface rootSliceType {
  films: FilmType[],
  cartoons: FilmType[],
  thrillers: FilmType[],
  comedy: FilmType[],
}

const initialState: rootSliceType = {
  films: [],
  cartoons: [],
  thrillers: [],
  comedy:  [],
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
    addThrillers: (state, action: PayloadAction<any>) => {
      state.thrillers = [...state.thrillers,...action.payload];
    },
    addComedy: (state, action: PayloadAction<any>) => {
      state.comedy = [...state.comedy,...action.payload];
    },
  },
})

export const { addFilms, addCartoons, addThrillers, addComedy } = rootSlice.actions

export default rootSlice.reducer