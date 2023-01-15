import { useEffect, useState } from 'react'
import { fetchTypes } from '../services/types'

const TopBar = () => {
  const [types, setTypes] = useState([])
  const [selectedType, setSelectedType] = useState([])

  useEffect(() => {
    fetchTypes()
      .then(async (response) => {
        setTypes(response.data.results)
      })
  }, [])

  const handleFilterByType = (event) => {
    const { value } = event.target
    setSelectedType(value)
  }

  return (
    <>
      <section className="section">
        <div className="section-filter resp-form container f-elements gap-sm">
          <div className="flex  gap-xl ">
            <a href="index.html">
              <img src="https://cdn-icons-png.flaticon.com/512/1169/1169608.png" alt="" className="nav__logo"
                width="40" />
            </a>
          </div>
          <form className="pokemonInput" role="search" id="searchForm">

            <div className="textfield-simple search-field flex items-center gap-sm w-138">
              <select className="search-input" name="" placeholder="selecciona un categoría" onChange={handleFilterByType}>
                <option value="normal">Selecciona un tipo</option>
                {types && types.map(({ name }) => <option key={name} value={name}>{name}</option>)}
              </select>
            </div>

          </form>

        </div>
      </section>
    </>
  )
}

export default TopBar