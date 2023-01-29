import { configureStore } from "@reduxjs/toolkit"

import pokemonsReducer from "./slices/pokemonsByTypeSlice"
import pokemonTypesReducer from "./slices/pokemonTypesSlice"

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    pokemonTypes: pokemonTypesReducer,
  }
})