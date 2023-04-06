import Pagination from "./Components/Pagination";
import Page from "./Components/Page";
import Search from "./Components/Search";

import {useEffect, useState} from 'react';

import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [typeSelectedArray, setTypeSelectedArray] = useState([]);

  useEffect(() => {
    
    async function getPokemons() {
      const res = await axios.get('https://raw.githubusercontent.com//fanzeyi/pokemon.json/master/pokedex.json');
      setPokemons(res.data);
    }

    getPokemons();
  }, [])

  return (
    <div>
      <h1>Page Number: {pageNumber}</h1>
      <Page pokemons = { pokemons } pageNumber={pageNumber} typeSelectedArray={ typeSelectedArray }/>
      <br />
      <Pagination pokemons={ pokemons } setPageNumber = {setPageNumber} pageNumber={pageNumber} typeSelectedArray={typeSelectedArray} setTypeSelectedArray={setTypeSelectedArray}/>
      <br />
      <br />
      <br />
      <Search setTypeSelectedArray={setTypeSelectedArray} typeSelectedArray={typeSelectedArray} setPageNumber={ setPageNumber }/>
    </div>
  );
}

export default App;
