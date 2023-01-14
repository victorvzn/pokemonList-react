import React from 'react'

const PokemonItem = ({ name }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png`

  return (
    <div>
    <article class="card pokemon-modal" data-id="${id}" href="#modal"  >
      <div class="card__image">
        <img src={imgUrl} alt={name} />
      </div>

      <div class="card__content">
          
          <div class="card__content-title box-card text-center">
              <h3 class="text-primary capital" >{name} </h3>
              <h4 class="text-alternate">Electric</h4>
              <span class="orderID">N° 323</span> 
          </div>
      </div>
    </article>
    
    </div>
  )
}

export default PokemonItem