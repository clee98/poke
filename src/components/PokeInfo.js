import React from "react"

import Stats from "./Stats"
import Type from "./Type"

import { firstLetterToUpperCase } from "."
import "./PokeInfo.css"

const PokeInfo = ({ data }) => {
  console.log(data)

  let mapHelper = () => {
    let temp = ""
    for (let i = 0; i < data.types.length; i++) {
      temp += data.types[i].type.name + " "
    }
    return temp
  }

  return (
    <div className={`ui container main-info `}>
      <div className="poke title">{`${firstLetterToUpperCase(data.name)} #${
        data.id
      }`}</div>
      <div className={`ui grid`}>
        <div className="left aligned three column row">
          <div className={`column title ${mapHelper()}`}>
            <img
              className={`ui massive image`}
              src={data.sprites.front_default}
            ></img>
            <div className="pokemon-type">
              <Type types={data.types} />
            </div>
          </div>
          <div className="column stats">
            <Stats stats={data.stats} />
          </div>
          <div className="column">
            <div className="ui divided grid">
              <div className="center aligned two column row">
                <div className="eight wide column">
                  <div className="item">
                    <div className="content">
                      Height
                      <br />
                      {data.height / 10 + " m"}
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
              <div
                id="physical-stats"
                className="center aligned two column row"
              >
                <div className="column">
                  <div className="item">
                    <div className="content">
                      Weight
                      <br />
                      {data.weight / 10 + " kg"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="ui two column row">
            
            
          </div> */}
      </div>
    </div>
  )
}

export default PokeInfo
