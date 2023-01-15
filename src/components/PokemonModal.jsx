import React from 'react'

const PokemonModal = ({ pokemon, handleClose }) => {
  if (!pokemon) return 

  return (
    <article className="card-modal">
      <div id="closeModal" onClick={handleClose}>X</div>
      <div className="card__image-modal " id={pokemon.name} >
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png" />
      </div>

      <div className="card__content">

        <div className="card-modal__content-title box-card">
          <div className="col-12 text-center">
            <h1 className="text-grey capital">{pokemon.name} </h1>
            <h4 className="text-alternate capital">{pokemon.types || "no tiene"} </h4>
          </div>

          <div className="divider"> </div>

          <div className="r-elements">
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> {pokemon.weight}Kg </h2>
              <h4 className=" text-alternate">WEIGHT</h4>
            </div>
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> {pokemon.types || "no tiene"}  </h2>
              <h4 className=" text-alternate">TYPE</h4>
            </div>
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> {pokemon.height}m </h2>
              <h4 className=" text-alternate">HEIGHT</h4>
            </div>
          </div>
          <div className="divider"> </div>
          <div className="r-elements">
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> id</h2>
              <h4 className=" text-alternate">ORDER</h4>
            </div>
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> {pokemon.abilities || "no tiene"}  </h2>
              <h4 className=" text-alternate">ABILITIES</h4>
            </div>
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> {pokemon.exp || "no tiene"}Exp  </h2>
              <h4 className=" text-alternate">EXPERIENCE</h4>
            </div>
          </div>
          <div className="divider"> </div>
          <div className="f-elements">
            <h3 className="text-alternate">STATS</h3>
          </div>

          
            <div className="divider"> </div>
            <div className="f-elements">
              <h3 className="text-alternate">MOVEMENTS</h3>
            </div>

            <div className="tagMove"> ..</div>


        </div>

      </div>
    </article>
  )
}

export default PokemonModal