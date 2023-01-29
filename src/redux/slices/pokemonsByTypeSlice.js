import { createSlice } from "@reduxjs/toolkit"

import { fetchAllPokemonsByType } from "../thunks/pokemonsByTypeThunk"

const initialState = {
  loading: false,
  error: {},
  pokemonsByType: []
}

export const pokemonsSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAllPokemonsByType.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAllPokemonsByType.fulfilled, (state, { payload }) => {
      state.loading = false
      state.error = {}
      state.pokemonsByType = payload
    })
    builder.addCase(fetchAllPokemonsByType.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.pokemonsByType = []
    })
  }
})

export default pokemonsSlice.reducer