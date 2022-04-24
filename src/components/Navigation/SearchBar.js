import react from 'react';
import $ from 'jquery';

const SearchBar = ({ array }) => {
    // $('.ui.search').search({
    //     source: array
    // })

    return(
        <div className="ui search">
            <div className='ui icon input'>
                <input className='prompt' type='text' placeholder='Search a Pokemon...' />
                <i className='search icon' />
            </div>
            <div className='results'>
                Hello
            </div>
            
        </div>
    )
}

export default SearchBar;