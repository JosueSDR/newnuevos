import React, { useEffect } from 'react';
import Viejocomponente from './Viejocomponente'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import RegistrationForm from './RegistrationForm';
import Jola from './Jola';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPokemon } from '../features/pokemon/pokemonSlice'
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const Nuevo = () => {
  const dispatch = useDispatch();
  const { pokemons, status, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
   
      dispatch(fetchAllPokemon());
    
  }, [status, dispatch]);

  

   return (
    <div>
    <h1>Lista de Pokémon</h1>
    <ul>
      {pokemons.map((pokemon, index) => (
        <li key={index}>{pokemon.abilities}</li>
      ))}
    </ul>
  </div>
   )


}

export default Nuevo
