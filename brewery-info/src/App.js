import React from 'react'
import { useSelector } from 'react-redux'

import SearchForm from './components/SearchForm'
import BrewCard from './components/BrewCard'

function App() {
  const brewSearch = useSelector(state => state.searchList)
  const brewFave = useSelector(state => state.favorites)
  
  return (
    <div>
      <SearchForm />
      {brewSearch.map(result => (
        <BrewCard key={result.id} brewery={result} />
      ))}

      <h1>Favorites Down Here</h1>
      {brewFave.map(fave => (
        <BrewCard key={fave.id} brewery={fave} />
      ))}
    </div>
  )
}

export default App
