import "./App.css"
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"

import Navigation from "./components/Navigation/Navigation"
import CardTable from "./components/CardTable/CardTable"
import PokeInfo from "./components/PokemonDataPage/PokeInfo"
import HomePage from "./components/HomePage/HomePage";

const App = () => {

  const [pokemon, setPokemon] = useState([])
  const [selectedPokeData, setSelectedPokeData] = useState([])

  // Add a new state that checks the url extension for a specific pokemon...
  // If that pokemon is found, then input that relevant data (might have to do another api call to retrieve all the data)
  console.log(selectedPokeData)
  console.log("rendering")
  // Get selected Pokemon Info
  const getSelectedPokemon = (data) => {
    setSelectedPokeData(data)
  }

  useEffect(() => {
    // Only receives pokemon name and a URL for more data
    const fetchPokemon = async () => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=1118/")
        .then((response) => {
          setPokemon(response.data.results)
        })
    }
    fetchPokemon()
  }, [])

  useEffect(() => {
    
    const fetchSelectedPokemon = () => {
      if (selectedPokeData.name !== undefined) {
        // navigate(`/pokedex/${selectedPokeData.name}`)
      }
      console.log(selectedPokeData)
    }
    fetchSelectedPokemon()
  }, [selectedPokeData])

  return (
    <div>
      
      <Router>
        <Navigation pokemon={pokemon} selectPoke={getSelectedPokemon} />
        <Routes>
          
          <Route
            path="/"
            element={
              <HomePage/>
            }/>
          <Route
            path={`/pokedex/${selectedPokeData.name}`}
            element={<PokeInfo data={selectedPokeData} />}
          />
          <Route
            path="/pokedex"
            element={
              <CardTable pokemon={pokemon} selectPoke={getSelectedPokemon} />
            }
          />
          <Route
            path={`/pokedex/undefined`}
            element={<div>Undefined</div>}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
