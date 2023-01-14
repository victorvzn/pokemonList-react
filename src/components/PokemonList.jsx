import React, { useEffect, useState } from 'react'

import PokemonItem from './PokemonItem'

import { fetchPokemons, fetchPokemon } from '../services/pokemons'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons()
      .then(async (response) => {
        const results = response.data.results
        
        const pokemonsPromises = await results.map(async (result) => {
          const { name, url } = result;
          const id = url.split("/").at(6)
          const pokemonResponse = await fetchPokemon(id)
          const types = await pokemonResponse.data.types.map(type => type.type.name).join(", ")
          return {
            ...result,
            types
          }
        })

        const customPokemons = await Promise.all(pokemonsPromises)

        setPokemons(customPokemons)
      })
  }, [])

  return (
    <>
      <section className="section section-cards">
            <div className="container g-elements gap-md" id="PokemonsContainer">
            
              {pokemons && pokemons.map(pokemon => <PokemonItem key={pokemon.name} name={pokemon.name} url={pokemon.url} /> )}

            </div>
      </section>
    </>
  )
}

export default PokemonList