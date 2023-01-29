import { useEffect, useState } from 'react'
import { fetchTypes } from '../services/types'

import { Link, useNavigate, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"
import { fetchAllPokemonTypes } from '../redux/thunks/pokemonTypesThunk'

const TopBar = ({ handleFilter }) => {
  const { pokemonTypes } = useSelector(state => state.pokemonTypes)

  const navigate = useNavigate()

  const { type } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPokemonTypes())
  }, [])

  const handleFilterByType = (event) => {
    const { value } = event.target
    handleFilter(value)
    navigate(`/pokemonList-react/${value}`)
  }

  return (
    <>
      <section className="section">
        <div className="section-filter resp-form container f-elements gap-sm">
          <div className="flex  gap-xl ">
            <Link to="/pokemonList-react/">
              <img src="https://cdn-icons-png.flaticon.com/512/1169/1169608.png" alt="" className="nav__logo"
                width="40" height="40" />
            </Link>
          </div>
          <form className="pokemonInput" role="search" id="searchForm">

            <div className="textfield-simple search-field flex items-center gap-sm w-138">
              <select className="search-input" name="" placeholder="selecciona un categoría" onChange={handleFilterByType} value={type}>
                <option value="normal">Selecciona un tipo</option>
                {pokemonTypes && pokemonTypes.map(({ name }) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>

          </form>

        </div>
      </section>
    </>
  )
}

export default TopBar