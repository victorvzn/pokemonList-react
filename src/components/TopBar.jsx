import { useEffect, useState } from 'react'
import { fetchTypes } from '../services/types'

import { Link, useNavigate } from 'react-router-dom'

import {useParams} from 'react-router-dom'

const TopBar = ({ handleFilter }) => {
  const [types, setTypes] = useState([])

  const navigate = useNavigate()

  const { type } = useParams()

  useEffect(() => {
    fetchTypes()
      .then(async (response) => {
        setTypes(response.data.results)
      })
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
                {types && types.map(({ name }) => (
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