import axios from 'axios'
import react, { useEffect, useState } from 'react'
import { firstLetterToUpperCase } from '..'

const SearchCard = ({ poke, selectPoke, setURL }) => {
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

    return (
        
        <div className="search-card"
            onClick={() => {selectPoke(data); setURL(poke.name)}}>
            <img src={image} style={{width: "30%", display: 'block'}}/>
            {firstLetterToUpperCase(poke.name)}
        </div>
    )
}

export default SearchCard;