import React, { useState } from 'react'

import './style.css'

function Page({pokemons, pageNumber, typeSelectedArray}) {
    const pokemonPerPage = 10;
    const startIndex = (pageNumber - 1) * pokemonPerPage;
    const endIndex = startIndex + pokemonPerPage;
    const [currentPokemon, setCurrentPokemon] = useState([]);

    let newList = [];
    pokemons.map(pokemon => {
        if (typeSelectedArray.every(type => pokemon.type.includes(type))) {
            newList.push(pokemon);
        }
        return 1;       
    })
    newList = newList.slice(startIndex, endIndex);

    const handleCard =  async (e) => {
        const id = e.target.id;
        console.log(id);
        document.getElementById(id).classList.toggle('active');
        const pokemon = await newList.find(pokemon => pokemon.id === parseInt(id)); 
        setCurrentPokemon(pokemon);

        document.getElementById('pokemon_info').innerHTML = `${pokemon.name.english}:`;
        document.getElementById('details').innerHTML = `Type: ${pokemon.type.join(', ')} <br> Base: ${pokemon.base.HP} HP, ${pokemon.base.Attack} Attack, ${pokemon.base.Defense} Defense, ${pokemon['base']['Sp. Attack']} SpAttack, ${pokemon['base']['Sp. Defense']} SpDefense, ${pokemon.base.Speed} Speed`;

        console.log(currentPokemon);
        
        document.getElementById(currentPokemon.id).classList.toggle('active');

    }

    // //https://github.com/fanzeyi/pokemon.json/tree/master/images/
    if (newList.length === 0) {
        return <div className='pokemon-list'><h1>There are no pokemon that are this type.</h1></div>
    } else {
        return (
            <>
                <div className='pokemon-list'>
                    {
                        newList.map(pokemon => {
                            return (
                                    <div key={pokemon.name.english} className='poke_card'>
                                        <img id={pokemon.id} alt='pokemon_img' onClick={handleCard} src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemon.id < 10 ? "00" : ""}${pokemon.id > 9 && pokemon.id < 100 ? "0" : ""}${pokemon.id}.png`}></img>
                                        <figcaption><h4>{pokemon.name.english}</h4></figcaption>
                                    </div>
                            )
                        })
                    }
                </div>

                <div id='pokemon_info'></div>
                <div id='details'></div>
            </>
           


          )
    }
  
}

export default Page