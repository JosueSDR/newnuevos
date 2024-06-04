import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemon/pokemonSlice'; // Ajusta la ruta según sea necesario

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
