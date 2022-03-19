import React, { useState, useEffect } from "react"
import axios from "axios"
import { Card } from "react-bootstrap"
import Type from "./Type"

import { firstLetterToUpperCase } from "."

const Cards = ({ pokeInfo, selectPoke }) => {
  const [data, setData] = useState([])
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const name = pokeInfo.name

  useEffect(() => {
    const getCardInfo = async () => {
      await axios.get(pokeInfo.url).then(({ data }) => {
        setData(data)
        setImage(data.sprites.front_default)
      })
    }
    getCardInfo()
    console.log(data.types)
  }, [pokeInfo.url])

  return (
    <Card
      style={{ width: "18rem" }}
      key={0}
      className="box"
      onClick={() => selectPoke(data)}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{firstLetterToUpperCase(name)}</Card.Title>
        <div className="pokemon-type">
          <Type types={data.types}></Type>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Cards
