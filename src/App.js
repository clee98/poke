import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation'
import CardTable from './components/CardTable'

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  

  useEffect(() => {
    const fetchPokemon = async () => {
      await axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=1118/")
      .then(response => {
        setPokemon(response.data.results);
      })
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <Navigation pokemon={pokemon}/>
      <CardTable pokemon={pokemon}/>
    </div>
    
  );
  
}
  

export default App;
