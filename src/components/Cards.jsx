import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'

const Cards = ({ pokeInfo }) => {

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const name = pokeInfo.name;

  
  useEffect(() => {
    const getCardInfo = async () => {
      await axios
      .get(pokeInfo.url)
      .then(({ data }) => {
        setImage(data.sprites.front_default);
      });

    };
    getCardInfo();
  });



  return (
    <Card style={{ width: '18rem' }} key={0} className='box'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards;