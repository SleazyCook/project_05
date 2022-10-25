const Searchbar = () => {
  return (
    <div>
      <form className="searchbar">
        <div className="search">
          <input type="text" className="search" placeholder="Search products"></input>
        </div>
        <button className="searchbar-button" type="submit">Search</button>
      </form>
      <br />
    </div>
  )
}

export default Searchbar;