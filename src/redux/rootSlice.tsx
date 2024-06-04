import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilmType } from '../../types/filmType'


export interface rootSliceType {
  films: FilmType[],
}

const initialState: rootSliceType = {
  films: [],
}

export const rootSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilms: (state, action: PayloadAction<FilmType[]>) => {
      state.films = [...state.films,...action.payload];
    },
    
  },
})

export const { addFilms } = rootSlice.actions

export default rootSlice.reducer