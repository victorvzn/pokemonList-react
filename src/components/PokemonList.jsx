import {useState } from 'react'

import PokemonItem from './PokemonItem'
import PokemonModal from './PokemonModal'

import { useParams } from 'react-router-dom'

const PokemonList = ({ pokemons, isLoading, isNotFound }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const { type } = useParams()

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

  if (isLoading) {
    return (
      <div className='section section-cards' style={{ display: 'flex', justifyContent: 'center', height: "100vh" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1169/1169608.png"
            alt=""
            className="nav__logo spinner"
            width="200"
            height="200"
          />
      </div>
    )
  }

  if (isNotFound) {
    return (
      <div className='section section-cards' style={{ display: 'flex', justifyContent: 'center', height: "100vh" }}>
         <h2>No se encontraron pokemons del tipo '{type}'</h2> 
      </div>
    )
  }

  return (
    <>
      <section className="section section-cards">
        <div className="container g-elements gap-md" id="PokemonsContainer">
        
          {pokemons && pokemons.map(pokemon => <PokemonItem key={pokemon.id} pokemon={pokemon} handleSelect={handleSelect} />)}

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