import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import './style.css'

function Search({ setTypeSelectedArray, typeSelectedArray, setPageNumber}) {
  const [types, setTypes] = useState([])

  // this function will be called only once when the component is mounted
  useEffect(() => {
    async function fetchTypes() {
      const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json')
      setTypes(response.data.map(type => type.english))
    }
    fetchTypes()
  }, [])


  const handleClickF = (e) => {
    const { value, checked } = e.target
    
    if (checked) {
      setTypeSelectedArray(typeSelectedArray => [...typeSelectedArray, value])
    } else {
      setTypeSelectedArray(typeSelectedArray => typeSelectedArray.filter(type => type !== value))
    }
    setPageNumber(1);
  }


  return (
    <div className='filter-area'>
      {
        types.map(type => <div key={type}>
          <input
            type="checkbox"
            value={type}
            id={type}
            className='filter-checkbox'
            onChange={handleClickF}
          />
          <label id="typeLabel" htmlFor={type}>{type}</label>


        </div>)
      }
    </div>
  )
}

export default Search