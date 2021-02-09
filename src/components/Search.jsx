import react from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Form, FormControl , FormGroup, Button} from 'react-bootstrap';
import $ from 'jquery';

class Search extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: this.props.pokemon.slice(0, 5)
    }
  }
  
    

  componentDidMount() {
  }

  api = () => {
    console.log('running')
    let tempArr = [];
    // While loop with conditions that count is <= 5 and we loop through all pokemon to see if
    // we get up to 5 pokemons with the searched keywords
    // Ex: "pika" -> up to 5 pokemons with "pika" in their name will show up
    for (let i = 0; i < this.props.pokemon.length; i++) {
      // If the pokemon's name contains the string user inputted, then add that to the list
      if (this.props.pokemon[i].name.includes($("#combo-box-demo")[0].value)) {
        // arr.push(req.data.results[i]);
        tempArr.push(this.props.pokemon[i]);
        // this.setState({
        //   arr: [...this.state.arr, this.props.pokemon[i]]
        // })
  
        // break out of the for loop 
        if (tempArr.length >= 5) {
          break;
        }
      }
    }
    //contributes to firing render function again
    this.setState({
      array: tempArr
    });
  }

  render() {
    return (
			<FormGroup>
				<Autocomplete onInputChange={this.api} id="combo-box-demo" options={this.state.array}	getOptionLabel={(option) => option.name}  
				style={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Search a Pocket Monster" variant="outlined"/>}/>
		
				{/* <Button onClick={this.api} variant="outline-success">Search</Button> */}

			</FormGroup>
			
		)
  }
}

export default Search;

