import React from 'react'
import { useSelector } from 'react-redux'

import BrewCard from './components/BrewCard'

function App() {
  const breweries = useSelector(state => state)
  
  return (
    <div>
      {breweries.map(brew => (
        <BrewCard key={brew.id} brewery={brew} />
      ))}
    </div>
  )
}

export default App
