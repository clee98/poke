import react from 'react';

import mainPic from '../../assets/images/pokemon.jpeg';

const HomePage = () => {
    return (
        <div className="ui container">
            <h1>Welcome to Poke</h1>
            <div className="homepage-pic">
                <img src={mainPic} alt="Pic" />
            </div>
        </div>
    )
}

export default HomePage;