import {useState } from 'react'

import PokemonItem from './PokemonItem'
import PokemonModal from './PokemonModal'


const PokemonList = ({ pokemons }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

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