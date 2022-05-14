import axios from 'axios'
import react, { useEffect, useState } from 'react'
import { firstLetterToUpperCase } from '..'

const SearchCard = ({ poke, selectPoke }) => {
    const [data, setData] = useState([])
    const [image, setImage] = useState("")
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        const getCardInfo = async () => {
            await axios.get(poke.url).then(({ data }) => {
                setData(data)
                setImage(data.sprites.front_default)
            })
        }
        getCardInfo()
    }, [poke.url])

    useEffect(() => {
        const selectPokemon = () => {
            if (selected && data !== []) {
                selectPoke(data)
            } 
        }
        selectPokemon()
        setSelected(false)
    }, [selected])

    return (
        <div className="search-card"
            onClick={console.log("hi")}>
            <img src={image} style={{width: "30%", display: 'block'}}/>
            {firstLetterToUpperCase(poke.name)}
        </div>
    )
}

export default SearchCard;