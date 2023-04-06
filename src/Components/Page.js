import React from 'react'

import './style.css'

function Page({pokemons, pageNumber, typeSelectedArray}) {
    const pokemonPerPage = 10;
    const startIndex = (pageNumber - 1) * pokemonPerPage;
    const endIndex = startIndex + pokemonPerPage;

    let newList = [];
    pokemons.map(pokemon => {
        if (typeSelectedArray.every(type => pokemon.type.includes(type))) {
            newList.push(pokemon);
        }
        return 1;       
    })
    newList = newList.slice(startIndex, endIndex);


    // //https://github.com/fanzeyi/pokemon.json/tree/master/images/
    if (newList.length === 0) {
        return <div className='pokemon-list'><h1>There are no pokemon that are this type.</h1></div>
    } else {
        return (
            <div className='pokemon-list'>
                {
                    newList.map(pokemon => {
                        return (
                        <div key={pokemon.id} className='poke_card'>
                            <img id='poke_img' alt='pokemon_img' src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemon.id < 10 ? "00" : ""}${pokemon.id > 9 && pokemon.id < 100 ? "0" : ""}${pokemon.id}.png`}></img>
                            <figcaption><h4>{pokemon.name.english}</h4></figcaption>
                        </div>
                        )
                    })
                }
            </div>
          )
    }
  
}

export default Page