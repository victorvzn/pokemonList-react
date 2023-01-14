import React, { useEffect, useState } from 'react'

import PokemonItem from './PokemonItem'

import { fetchPokemons } from '../services/pokemons'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons()
      .then((response) => {
        console.log(response.data.results)
        setPokemons(response.data.results)
      })
  }, [])

  return (
    <>
      {pokemons && pokemons.map(pokemon => <PokemonItem key={pokemon.name} name={pokemon.name} /> )}
    </>
  )
}

export default PokemonList