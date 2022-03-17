import "./App.css"
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"

import Navigation from "./components/Navigation"
import CardTable from "./components/CardTable"
import PokeInfo from "./components/PokeInfo"

const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [selectedPokeData, setSelectedPokeData] = useState([])
  // Add a new state that checks the url extension for a specific pokemon...
  // If that pokemon is found, then input that relevant data (might have to do another api call to retrieve all the data)

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

  return (
    <div>
      <Navigation pokemon={pokemon} selectPoke={getSelectedPokemon} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <CardTable pokemon={pokemon} selectPoke={getSelectedPokemon} />
            }
          ></Route>
          <Route
            path={`/${selectedPokeData.name}`}
            element={<PokeInfo data={selectedPokeData} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
