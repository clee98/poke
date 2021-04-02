import React, { useEffect, useState } from 'react';
import Cards from './Cards'

const CardTable = ({ pokemon }) => {
  const [pokeOnPage, setPokeOnPage] = useState(pokemon.slice(0, 30));
  const [pageNum, setPageNum] = useState(1);
  const [numCardsPerPage, setNumCardsPerPage] = useState(30);
  const [maxPageNum, setMaxPageNum] = useState(38);

  // Show {numCardsPerPage} amount of Pokemons on each page
  useEffect(() => {
    console.log("use effect");
    const setPoke = () => {
      setPokeOnPage(pokemon.slice((pageNum - 1) * 30, pageNum * 30));
    };
    setPoke();

  }, [pageNum]);

  const mapHelper = pokeOnPage.map((poke) => {
    return (
      <Cards key={poke.name} pokeInfo={poke} />
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
    <div className='container'>
      <div className='numEntries'>
        <ul>
          <li onClick={e => setNumCardsPerPage(30)}>30</li>
          <li className='unclickable'>|</li>
          <li onClick={e => setNumCardsPerPage(50)}>50</li>
        </ul>
      </div>
      <div className="grid">
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




