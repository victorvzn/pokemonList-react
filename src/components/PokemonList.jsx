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
          const stats = await pokemonResponse.data.stats.map(stat => stat.stat).join(", ")
          const abilities = await pokemonResponse.data.abilities.map(ability => ability.ability.name).join(", ")
          const weight = await pokemonResponse.data.weight
          const height = await pokemonResponse.data.height
          const exp = await pokemonResponse.data.base_experience
          return {
            ...result,
            types,
            stats,
            weight,
            height,
            exp,
            abilities
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

          {pokemons && pokemons.map(pokemon => <PokemonItem key={pokemon.name} name={pokemon.name} url={pokemon.url} type={pokemon.types} />)}

        </div>
      </section>
      {pokemons && pokemons.map(pokemon =>
        <article className="card-modal">
          <div id="closeModal">X</div>
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

              <div className="stats">
                <div className="skills-list">
                  <h2 className="skill-name text-grey">Hp ({pokemon.stats[0].base_stat} %)</h2>
                  <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[0].base_stat}></div>
                </div>

                <div className="skills-list">
                  <h2 className="skill-name text-grey">Attack ({pokemon.stats[1].base_stat}%)</h2>
                  <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[1].base_stat}></div>
                </div>
                <div className="skills-list">
                  <h2 className="skill-name text-grey">Defense ({pokemon.stats[2].base_stat}%)</h2>
                  <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[2].base_stat}></div>
                </div>
                <div className="skills-list">
                  <h2 className="skill-name text-grey">Special-attack ({pokemon.stats[3].base_stat}%)</h2>
                  <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[3].base_stat}></div>
                </div>
                <div className="skills-list">
                  <h2 className="skill-name text-grey">Special-defense ({pokemon.stats[4].base_stat}%)</h2>
                  <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[4].base_stat}></div>
                </div>
                <div className="skills-list">
                  <h2 className="skill-name text-grey">Speed ({pokemon.stats[5].base_stat}%)</h2>
                  <div className="skill-percent skill-percent-html" data-percent={pokemon.stats[5].base_stat}></div>
                </div>

                <div className="divider"> </div>
                <div className="f-elements">
                  <h3 className="text-alternate">MOVEMENTS</h3>
                </div>

                <div className="tagMove"> ..</div>


              </div>
            </div>

          </div>
        </article>
      )}
    </>
  )
}



export default PokemonList