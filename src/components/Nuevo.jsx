import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPokemon } from '../features/pokemon/pokemonSlice';

const Nuevo = () => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchAPokemon('mew'));
  }, [dispatch]);

  if (pokemonState.loading) {
    return <p>Cargando...</p>;
  }

  if (pokemonState.error) {
    return <p>Error: {pokemonState.error}</p>;
  }

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      {pokemonState.pokemons && pokemonState.pokemons.sprites ? (
        <ul>
          <img src={pokemonState.pokemons.sprites.back_default} alt="Back Default" />
          <img src={pokemonState.pokemons.sprites.back_shiny} alt="Back Shiny" />
          <img src={pokemonState.pokemons.sprites.front_default} alt="Front Default" />
        </ul>
      ) : (
        <p>No hay datos de Pokémon disponibles.</p>
      )}
    </div>
  );
};

export default Nuevo;
