import React from "react"

const Type = ({ types }) => {
  if (!types) return <div></div>
  // List all pokemon types in this array
  // Plan is to maybe have each index contain the div elements needed to be rendered on site
  const type_arr = [
    {
      name: "normal",
      color: "ui label",
    },
    {
      name: "fire",
      color: "ui red label",
    },
    {
      name: "water",
      color: "ui blue label",
    },
    {
      name: "grass",
      color: "ui green label",
    },
    {
      name: "electric",
      color: "ui yellow label",
    },
    {
      name: "ice",
      color: "ui teal label",
    },
    {
      name: "fighting",
      color: "ui maroon label",
    },
    {
      name: "poison",
      color: "ui violet label",
    },
    {
      name: "ground",
      color: "ui brown label",
    },
    {
      name: "flying",
      color: "ui grey label",
    },
    {
      name: "psychic",
      color: "ui purple label",
    },
    {
      name: "bug",
      color: "ui olive label",
    },
    {
      name: "rock",
      color: "ui brown label",
    },
    {
      name: "ghost",
      color: "ui violet label",
    },
    {
      name: "dark",
      color: "ui black label",
    },
    {
      name: "dragon",
      color: "ui red label",
    },
    {
      name: "steel",
      color: "ui grey label",
    },
    {
      name: "fairy",
      color: "ui pink label",
    },
  ]

  let firstLetterToUpperCase = (str) => {
    let temp = str[0].toUpperCase() + str.substring(1)
    return temp
  }

  const loadType = types.map((type) => {
    let foundType = type_arr.find((element) => element.name === type.type.name)
    return (
      <li key={type.type.name} className={foundType.color}>
        {firstLetterToUpperCase(foundType.name)}
      </li>
    )
  })

  return (
    <div className="type-area">
      <ul>{loadType}</ul>
    </div>
  )
}

export default Type
