import { createSlice } from "@reduxjs/toolkit"

import { fetchAllPokemonTypes } from "../thunks/pokemonTypesThunk"

const initialState = {
  loading: false,
  error: {},
  pokemonTypes: []
}

export const pokemonTypesSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAllPokemonTypes.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAllPokemonTypes.fulfilled, (state, { payload }) => {
      state.loading = false
      state.error = {}
      state.pokemonTypes = payload
    })
    builder.addCase(fetchAllPokemonTypes.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.pokemonTypes = []
    })
  }
})

export default pokemonTypesSlice.reducer