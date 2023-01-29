import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPokemonsByType, fetchPokemon } from "../../services/pokemons";

export const fetchAllPokemonsByType = createAsyncThunk(
  'home/fetchAllPokemonsByType',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await fetchPokemonsByType(id)

      const pokemonResponse = data.pokemon ?? [];

      const results = pokemonResponse.map(({ pokemon }) => pokemon)

      const pokemonsPromises = await results.map(async (result) => {
        const { name, url } = result;
        const id = url.split("/").at(6)
        const pokemonResponse = await fetchPokemon(id)
        const types = await pokemonResponse.data.types.map(type => type.type.name).join(", ")
        const stats = await pokemonResponse.data.stats
        const abilities = await pokemonResponse.data.abilities.map(ability => ability.ability.name).join(", ")
        const moves = await pokemonResponse.data.moves.map(move => move.move.name).join(' , ')
        const weight = await pokemonResponse.data.weight
        const height = await pokemonResponse.data.height
        const exp = await pokemonResponse.data.base_experience
        const image = await pokemonResponse.data.sprites.other['official-artwork'].front_default
        return {
          ...result,
          types,
          stats,
          weight,
          height,
          exp,
          abilities,
          image,
          id,
          moves
        }
      })

      const customPokemons = await Promise.all(pokemonsPromises)

      return customPokemons
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);