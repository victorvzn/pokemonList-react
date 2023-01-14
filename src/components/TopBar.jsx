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
                    <div className="textfield-icon w-60">
                        <img src={search} alt="iconTextfield"/>
                        <input className="textfield" type="search" name="name" id="name" 
                            placeholder="¿Qué pokemon buscas?"/>
                    </div>
                    <div className="flex gap-sm">
                        <button className="button button-secondary button-xl" type="submit">Buscar</button>
                    </div>
                </form>
                
            </div>
        </section>
      </>
    )
  }
  
  export default TopBar