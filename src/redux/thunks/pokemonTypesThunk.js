import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchTypes } from "../../services/types";

export const fetchAllPokemonTypes = createAsyncThunk(
  'home/fetchAllPokemonTypes',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchTypes()

      return data.results
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);