import {useState } from 'react'

import PokemonItem from './PokemonItem'
import PokemonModal from './PokemonModal'

const PokemonList = ({ pokemons }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const handleSelect = (pokemon) => {
    setSelectedPokemon(pokemon)
    var modal = document.getElementById('modal');
    modal.classList.add('open');
    
    window.scrollTo(0, 0);

  }
  
  const handleClose = () => {
    setSelectedPokemon(null)

    var closeOverlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('closeModal');

    closeOverlay.addEventListener('click', modal.classList.remove('open'));
    closeBtn.addEventListener('click', modal.classList.remove('open'));
    
  }

  return (
    <>
      <section className="section section-cards">
        <div className="container g-elements gap-md" id="PokemonsContainer">

          {pokemons && pokemons.map(pokemon => <PokemonItem key={pokemon.name} pokemon={pokemon} handleSelect={handleSelect} />)}

        </div>
      </section>
      <section className="modal" id="modal" role="dialog" >
            <div id="overlay" className="overlay"></div>
            
            <div className="container-modal" id="modal-content">
              {selectedPokemon && <PokemonModal pokemon={selectedPokemon} handleClose={handleClose} />}
            </div>
        </section>
      
    </>
  )
}



export default PokemonList