import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useEffect } from 'react'
function FilteredPokemons({ typeSelectedArray }) {

    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
        const getPokemons = async () => {
            const res = await axios.get(`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json`)
            setPokemons(res.data)   
        } 
        getPokemons();
    }, [])

    return (
        <div>
            {
                pokemons.map(pokemon => {
                    if (typeSelectedArray.every(type => pokemon.type.includes(type))) {
                        return <div key={pokemon.id}>
                            {pokemon.name.english}
                        </div>
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
}

export default FilteredPokemons