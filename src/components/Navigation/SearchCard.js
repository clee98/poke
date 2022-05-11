import react from 'react';

const SearchCard = ({ poke }) => {
    return (
        <div className="search-card">
            {poke.name}
        </div>
    )
}

export default SearchCard;