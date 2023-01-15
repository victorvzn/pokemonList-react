import React from 'react'
import defaultImage from '../assets/default.png'

import {useRef, useEffect} from 'react';

const PokemonModal = ({ pokemon, handleClose }) => {
  if (!pokemon) return
  console.log(pokemon)

  const ref = useRef(null);

  useEffect(() => {
    document.querySelectorAll('.skill-percent').forEach(elm =>{
      var perc = elm.dataset.percent
      elm.style.width = perc
    })
  }, []);

  return (
    <article className="card-modal ">
      <div id="closeModal" onClick={handleClose}>X</div>
      <div className="card__image-modal" id={pokemon.name} >
        <img
          src={pokemon.image || defaultImage}
          alt="gg"
        />
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
              <h2 className="text-grey capital"> {pokemon.types || "--"}  </h2>
              <h4 className=" text-alternate">TYPE</h4>
            </div>
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> {pokemon.height || "--"}m </h2>
              <h4 className=" text-alternate">HEIGHT</h4>
            </div>
          </div>
          <div className="divider"> </div>
          <div className="r-elements">
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> {pokemon.id || "--"}</h2>
              <h4 className=" text-alternate">ORDER</h4>
            </div>
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> {pokemon.abilities || "--"}  </h2>
              <h4 className=" text-alternate">ABILITIES</h4>
            </div>
            <div className="w-100 text-center">
              <h2 className="text-grey capital"> {pokemon.exp || "--"}  </h2>
              <h4 className=" text-alternate">EXPERIENCE</h4>
            </div>
          </div>
          <div className="divider"> </div>
          <div className="f-elements">
            <h3 className="text-alternate">STATS</h3>
          </div>
          <div className="stats">
            <div className="skills-list" ref={ref}>
              <h2 className="skill-name text-grey">Hp ({pokemon.stats[0].base_stat} %)</h2>
              <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[0].base_stat + "%"}></div>
            </div>

            <div className="skills-list" ref={ref}>
              <h2 className="skill-name text-grey">Attack ({pokemon.stats[1].base_stat}%)</h2>
              <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[1].base_stat + "%"}></div>
            </div>
            <div className="skills-list" ref={ref}>
              <h2 className="skill-name text-grey">Defense ({pokemon.stats[2].base_stat}%)</h2>
              <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[2].base_stat + "%"}></div>
            </div>
            <div className="skills-list" ref={ref}>
              <h2 className="skill-name text-grey">Special-attack ({pokemon.stats[3].base_stat}%)</h2>
              <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[3].base_stat + "%"}></div>
            </div>
            <div className="skills-list" ref={ref}>
              <h2 className="skill-name text-grey">Special-defense ({pokemon.stats[4].base_stat}%)</h2>
              <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[4].base_stat + "%"}></div>
            </div>
            <div className="skills-list" ref={ref}>
              <h2 className="skill-name text-grey">Speed ({pokemon.stats[5].base_stat}%)</h2>
              <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[5].base_stat + "%"}></div>
            </div>
          </div>


          <div className="divider"> </div>
          <div className="f-elements">
            <h3 className="text-alternate">MOVEMENTS</h3>
          </div>

          <div className="tagMove"> {pokemon.moves || "No tiene"}</div>


        </div>

      </div>
    </article>
  )
}

export default PokemonModal