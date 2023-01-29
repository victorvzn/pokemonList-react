import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import PokemonList from "../components/PokemonList"
import TopBar from "../components/TopBar"

import { fetchAllPokemonsByType } from '../redux/thunks/pokemonsByTypeThunk'

function App() {
  const { loading, pokemonsByType } = useSelector(state => state.pokemons)
  
  const [selectedType, setSelectedType] = useState('electric')
  const [isNotFound, setIsNotFound] = useState(false)
  
  const { type } = useParams()

  const dispatch = useDispatch()

  useEffect(() => setSelectedType(type), [type])

  const handleFilterByType = (type) => setSelectedType(type)

  useEffect(() => {
    dispatch(fetchAllPokemonsByType(selectedType))
  }, [selectedType])

  return (
    <>
      <TopBar handleFilter={handleFilterByType} />

      <PokemonList pokemons={pokemonsByType} isLoading={loading} isNotFound={pokemonsByType.length === 0} />
    </>
  )
}

export default App
