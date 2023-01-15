import React from 'react'

const PokemonItem = ({ name, url, type }) => {
  const id = url.split("/").at(6)
  return (
    <div>
      <article className="card pokemon-modal" data-id={id} href="#modal"  >
        <div className="card__image">
          <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+id+".png"} alt={name} />
        </div>
        <div className="card__content">
            
            <div className="card__content-title box-card text-center">
                <h3 className="text-primary capital" >{name} </h3>
                <h4 className="text-alternate">{type}</h4>
                <span className="orderID">N° {id}</span> 
            </div>
        </div>
      </article>
    </div>
  )
}

export default PokemonItem