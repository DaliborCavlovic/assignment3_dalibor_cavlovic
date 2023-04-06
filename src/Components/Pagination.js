import React from 'react'
import './style.css'

function Pagination({ pokemons, setPageNumber, pageNumber, typeSelectedArray }) {
  let newList = [];
  
  pokemons.map(pokemon => {
      if (typeSelectedArray.every(type => pokemon.type.includes(type))) {
          newList.push(pokemon);
      }
      return 1;
  })
  const pageSize = 10;
  const pagesCount = Math.ceil(newList.length / pageSize);
  const pageNumbers = []

  console.log(`pagesCount: ${pagesCount}, pokemon count new list: ${newList.length}`)

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i)
  }

  const nextPage = () => {
    if (pageNumber !== pagesCount) setPageNumber(pageNumber + 1)
  }

  const prevPage = () => {
    if (pageNumber !== 1) setPageNumber(pageNumber - 1)
  }


  if (newList.length > 0) {
    return (
      <div>
        {(pageNumber !== 1) && (<button onClick={prevPage}>prev </button>)}
  
        {
          pageNumbers.map(number => {
            if (number < pageNumber + 6 && number > pageNumber - 6) {
              return (<>
                <button key={number} onClick={() => setPageNumber(number)} className={(number === pageNumber) ? 'active' : ''}>
                  {number}
                </button>
              </>)
            }
            return null;
          })
        }
  
        {(pageNumber !== pagesCount ) && <button onClick={nextPage}>
          next
        </button>}
      </div>
    )
  }
}

export default Pagination