import React, { useEffect, useState } from 'react'

import PokemonItem from './PokemonItem'
import PokemonModal from './PokemonModal'

import { fetchPokemonsByType, fetchPokemon } from '../services/pokemons'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    fetchPokemonsByType()
      .then(async (response) => {
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
  }, [])

  const handleSelect = (pokemon) => {
    setSelectedPokemon(pokemon)
  }
  
  const handleClose = () => {
    setSelectedPokemon(null)
  }

  return (
    <>
      <section className="section section-cards">
        <div className="container g-elements gap-md" id="PokemonsContainer">

          {pokemons && pokemons.map(pokemon => <PokemonItem key={pokemon.name} pokemon={pokemon} handleSelect={handleSelect} />)}

        </div>
      </section>

      {selectedPokemon && <PokemonModal pokemon={selectedPokemon} handleClose={handleClose} />}
    </>
  )
}



export default PokemonList