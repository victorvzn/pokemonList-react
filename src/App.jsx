import { useEffect, useState } from 'react'

import PokemonList from "./components/PokemonList"
import TopBar from "./components/TopBar"

import { fetchPokemonsByType, fetchPokemon } from './services/pokemons'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [selectedType, setSelectedType] = useState('electric')

  const handleFilterByType = (type) => {
    setSelectedType(type)
  }

  useEffect(() => {
    fetchPokemonsByType(selectedType)
      .then(async (response) => {
        console.log(response)
        
        const pokemonResponse = response.data.pokemon
        const results = pokemonResponse.map(({ pokemon }) => pokemon)
        const pokemonsPromises = await results.map(async (result) => {
          const { name, url } = result;
          const id = url.split("/").at(6)
          const pokemonResponse = await fetchPokemon(id)
          const types = await pokemonResponse.data.types.map(type => type.type.name).join(", ")
          const stats = await pokemonResponse.data.stats.map(stat => stat.stat).join(", ")
          const abilities = await pokemonResponse.data.abilities.map(ability => ability.ability.name).join(", ")
          const weight = await pokemonResponse.data.weight
          const height = await pokemonResponse.data.height
          const exp = await pokemonResponse.data.base_experience
          return {
            ...result,
            types,
            stats,
            weight,
            height,
            exp,
            abilities
          }
        })

        const customPokemons = await Promise.all(pokemonsPromises)
        setPokemons(customPokemons)
      })
  }, [selectedType])

  return (
    <>
      <TopBar selectedType={selectedType} handleFilter={handleFilterByType} />
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default App
