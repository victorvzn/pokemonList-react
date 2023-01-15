import React from 'react'
import defaultImage from '../assets/default.png'

const PokemonItem = ({ pokemon, handleSelect }) => {
  const id = pokemon.url.split("/").at(6)
  
  return (
    
      <article className="card pokemon-modal" data-id={id} href="#modal" onClick={() => handleSelect(pokemon)} >
        <div className="card__image">
          <img src={pokemon.image || defaultImage} />
        </div>
        <div className="card__content">
            <div className="card__content-title box-card text-center">
                <h3 className="text-grey capital" >{pokemon.name} </h3>
                <h4 className="text-alternate">{pokemon.types}</h4>
                <br />
                <span className="orderID">N° {id}</span> 
            </div>
        </div>
      </article>
    
  )
}

export default PokemonItem