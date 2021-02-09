import react from 'react';
import { Card , Button} from 'react-bootstrap';
import Cards from './Cards'

class CardTable extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeOnPage: this.props.pokemon.slice(0, 30),
      pageNum: 1,
      numCardsPerPage: 30,
      maxPageNum: 38
    }
  }


  componentDidMount() {

  }

    
  render(){
    return(
      <div className='grid'>
        <div className='numEntries'>
          <ul>
            <li onClick={e => this.setNumEntries(30)}>30</li>
            <li className='unclickable'>|</li>
            <li onClick={e => this.setNumEntries(50)}>50</li>
          </ul>
        </div>
        <Cards pokeInfo={this.state.pokeOnPage[0]}/>
        <div className='pagination'>
          <button onClick={this.decrementPageNum}>Prev</button>
          {this.state.pageNum}
          /
          {this.state.maxPageNum}
          <button onClick={this.incrementPageNum}>Next</button>
        </div>
      </div>
    )
  }
}

export default CardTable;




