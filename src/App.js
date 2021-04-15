import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navigation from './components/Navigation'
import CardTable from './components/CardTable'
import Route from './components/Route';
import PokeInfo from './components/PokeInfo';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokeData, setSelectedPokeData] = useState([]);
  // Add a new state that checks the url extension for a specific pokemon...
  // If that pokemon is found, then input that relevant data (might have to do another api call to retrieve all the data)

  // Get selected Pokemon Info
  const getSelectedPokemon = (data) => {
    setSelectedPokeData(data)
  };

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
      <Navigation pokemon={pokemon} selectPoke={getSelectedPokemon} />
      <Route path="/">
        <CardTable pokemon={pokemon} selectPoke={getSelectedPokemon} />
      </Route>
      <Route path={`/${selectedPokeData.name}`}>
        <PokeInfo data={selectedPokeData} />
      </Route>
      
    </div>
    
  );
  
}
  

export default App;
