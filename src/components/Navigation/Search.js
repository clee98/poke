import React, { useState, useEffect } from "react"
import { TextField } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"
import { FormGroup } from "react-bootstrap"
import SearchCard from './SearchCard'
import "../Box.css"

const Search = ({ pokemon, selectPoke }) => {
  const [array, setArray] = useState([])
  const [searchText, setSearchText] = useState("")
  const [active, setActive] = useState(false)

  useEffect(() => {
    const api = async () => {
      let tempArr = []

      // While loop with conditions that count is <= 5 and we loop through all pokemon to see if
      // we get up to 5 pokemons with the searched keywords
      // Ex: "pika" -> up to 5 pokemons with "pika" in their name will show up
      for (let i = 0; i < pokemon.length; i++) {
        // If the pokemon's name contains the string user inputted, then add that to the list
        if (pokemon[i].name.includes(searchText)) {
          // arr.push(req.data.results[i]);
          tempArr.push(pokemon[i])
          // this.setState({
          //   arr: [...this.state.arr, this.props.pokemon[i]]
          // })

          // break out of the for loop
          if (tempArr.length >= 5) {
            break
          }
        }
      }

      //contributes to firing render function again
      setArray(tempArr)
    }
    api()
  }, [searchText, pokemon, array.length])

  const handleSelected = (option) => {
    selectPoke(option)
  }

  const mapResults = array.map((poke) => {
    console.log(poke);
    return (
      <SearchCard poke={poke} handleSelected={handleSelected} />
    )
  })

  return (
    <div className="ui search">
            <div className='ui icon input'>
                <input 
                  className='prompt' 
                  type='text' 
                  placeholder='Search a Pokemon...'
                  onChange={(e) => setSearchText(e.target.value)} />
                <i className='search icon' />
            </div>
            <div className='result'>
                {active ? (mapResults) : ("")}
            </div>
            
    </div>
    // <FormGroup>
    //   <Autocomplete
    //     id="combo-box-demo"
    //     options={array}
    //     getOptionLabel={(option) => option.name}
    //     style={{ width: 300 }}
    //     renderInput={(params) => (
    //       <TextField
    //         {...params}
    //         label="Search a Pocket Monster"
    //         variant="outlined"
    //       />
    //     )}
    //     onInputChange={(e) => setSearchText(e.target.value)}
    //     getOptionSelected={(option, value) => {
    //       selectPoke(value)
    //     }}
    //   />

    //   {/* <Button onClick={this.api} variant="outline-success">Search</Button> */}
    // </FormGroup>
  )
}

export default Search
