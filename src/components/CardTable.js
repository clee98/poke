import React, { useEffect, useState } from 'react';

import Cards from './Cards'
import Link from './Link';

const CardTable = ({ pokemon, selectPoke }) => {
  const [pokeOnPage, setPokeOnPage] = useState(pokemon.slice(0, 30));
  const [pageNum, setPageNum] = useState(1);
  const [numCardsPerPage, setNumCardsPerPage] = useState(30);
  const [maxPageNum, setMaxPageNum] = useState(38);

  // Show {numCardsPerPage} amount of Pokemons on each page
  useEffect(() => {
    const setPoke = () => {
      if (numCardsPerPage === 30) {
        setPokeOnPage(pokemon.slice((pageNum - 1) * 30, pageNum * 30));
      }
      else {
        setPokeOnPage(pokemon.slice((pageNum - 1) * 60, pageNum * 60));
      }
      
    };

    setPoke();

  }, [pageNum, pokemon, numCardsPerPage]);

  // Set MaxPageNumber if numCardsPerPage changes
  useEffect(() => {
    const setMaxPage = () => {
      setMaxPageNum(Math.ceil(pokemon.length / numCardsPerPage));
    };

    setMaxPage();

  }, [numCardsPerPage, pokemon.length]);

  const mapHelper = pokeOnPage.map((poke) => {
    return (
      <Link key={poke.name} href={`/${poke.name}`} className="ui item">
        <Cards pokeInfo={poke} selectPoke={selectPoke} />
      </Link>
      
    );
  });
      
  const decrementPageNum = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const incrementPageNum = () => {
    if (pageNum < maxPageNum) {
      setPageNum(pageNum + 1);
    }
  };

    
  return(
    <div className='ui container'>
      <div className='numEntries'>
        <ul>
          <li onClick={e => setNumCardsPerPage(30)}>30</li>
          <li className='unclickable'>|</li>
          <li onClick={e => setNumCardsPerPage(60)}>60</li>
        </ul>
      </div>
      <div className="ui grid">
        {mapHelper}
      </div>
        
      <div className='pagination'>
        <button onClick={decrementPageNum}>Prev</button>
        {pageNum}
        /
        {maxPageNum}
        <button onClick={incrementPageNum}>Next</button>
      </div>
    </div>
  )
}

export default CardTable;




