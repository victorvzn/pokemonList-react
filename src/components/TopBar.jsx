import search from "../assets/search.svg"

const TopBar = () => {
  
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
                        <select className="search-input" name="" placeholder="selecciona un categoría" id="">
                            <option value="normal">Selecciona un tipo</option>
                            <option value="normal">normal</option>
                            <option value="fighting">fighting</option>
                            <option value="flying">flying</option>
                            <option value="poison">poison</option>
                            <option value="ground">ground</option>
                            <option value="rock">rock</option>
                            <option value="bug">bug</option>
                            <option value="ghost">ghost</option>
                            <option value="steel">steel</option>
                            <option value="fire">fire</option>
                            <option value="water">water</option>
                            <option value="grass">grass</option>
                            <option value="electric">electric</option>
                            <option value="psychic">psychic</option>
                            <option value="ice">ice</option>
                            <option value="dragon">dragon</option>
                            <option value="dark">dark</option>
                            <option value="fairy">fairy</option>
                            <option value="unknown">unknown</option>
                            <option value="shadow">shadow</option>
                        </select>
                    </div>
                

                    
                </form>
                
            </div>
        </section>
      </>
    )
  }
  
  export default TopBar