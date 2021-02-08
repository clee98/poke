import './App.css';
import react from 'react';
import axios from 'axios';
import Navigation from './components/Navigation'

class App extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    }

    // Fetch pokemon data
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=1118/")
    .then(response => {
      this.setState({
        pokemon: response.data.results
      })
    })
    
    
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <header>
          <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
          />
          <Navigation pokemon={this.state.pokemon}/>
        </header>
        <body>
          <div className="App">
            
          </div>
        </body>
      </div>
      
    );
  }
  
}
  

export default App;
