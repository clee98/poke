import React from 'react';

import Stats from './Stats';

const PokeInfo = ({ data }) => {
  console.log(data);
  return (
    <div className="ui container">
      <div className="poke title">
        {`${data.name} #${data.id}`}
      </div>
      <div className="ui grid">
          <div className="left aligned two column row">
            <div className="column title">
              <img className="ui massive image" src={data.sprites.front_default}></img>
            </div>
            <div className="column">
              <div className="ui divided grid">
                <div className="center aligned two column row">
                  <div className="eight wide column">
                    <div className="item">
                      <div className="content">
                        Height
                        <br />
                        {data.height}
                      </div>
                    </div>
                  </div>
                  <div className="column right">
                    <div className="item">
                      <div className="left aligned content">
                        Ability
                        <br />
                        {data.abilities[0].ability.name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center aligned two column row">
                  <div className="column">
                    <div className="item">
                      <div className="content">
                        Weight
                        <br />
                        {data.weight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui two column row">
            <div className="column stats">
              <Stats stats={data.stats} />
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default PokeInfo;