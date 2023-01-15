import { useEffect, useState } from 'react'

import PokemonList from "./components/PokemonList"
import TopBar from "./components/TopBar"

import { fetchPokemonsByType, fetchPokemon } from './services/pokemons'

import { useParams } from 'react-router-dom'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [selectedType, setSelectedType] = useState('electric')
  const [isLoading, setIsLoading] = useState(false)

  const { type } = useParams()

  useEffect(() => {
    setSelectedType(type)
  }, [type])

  const handleFilterByType = (type) => {
    setSelectedType(type)
  }

  useEffect(() => {
    fetchPokemonsByType(selectedType)
      .then(async (response) => {
        setIsLoading(true)
        const pokemonResponse = response.data.pokemon
        const results = pokemonResponse.map(({ pokemon }) => pokemon)

        const pokemonsPromises = await results.map(async (result) => {
          const { name, url } = result;
          const id = url.split("/").at(6)
          const pokemonResponse = await fetchPokemon(id)
          const types = await pokemonResponse.data.types.map(type => type.type.name).join(", ")
          const stats = await pokemonResponse.data.stats
          const abilities = await pokemonResponse.data.abilities.map(ability => ability.ability.name).join(", ")
          const moves = await pokemonResponse.data.moves.map(move => move.move.name).join(' , ')
          const weight = await pokemonResponse.data.weight
          const height = await pokemonResponse.data.height
          const exp = await pokemonResponse.data.base_experience
          const image = await pokemonResponse.data.sprites.other['official-artwork'].front_default
          return {
            ...result,
            types,
            stats,
            weight,
            height,
            exp,
            abilities,
            image,
            id,
            moves
          }
        })

        const customPokemons = await Promise.all(pokemonsPromises)

        setPokemons(customPokemons)

        setIsLoading(false)
      })
  }, [selectedType])

  return (
    <>
      <TopBar handleFilter={handleFilterByType} />
      <PokemonList pokemons={pokemons} isLoading={isLoading} />
    </>
  )
}

export default App
