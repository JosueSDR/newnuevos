import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import servicePokemon from './pokemonService'; // Ajusta la ruta según sea necesario

// Define el thunk
export const fetchAllPokemon = createAsyncThunk(
  'pokemon/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await servicePokemon.getAllPokemon();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAPokemon = createAsyncThunk(
  'pokemon/fetchA',
  async (id, thunkAPI) => {
    try {
      const data = await servicePokemon.getAPokemon(id);
      return data;
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Define el slice
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPokemon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemons = action.payload.results; // Asegúrate de ajustar según la estructura de los datos devueltos
      })
      .addCase(fetchAllPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchAPokemon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemons = action.payload // Asegúrate de ajustar según la estructura de los datos devueltos
      })
      .addCase(fetchAPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
