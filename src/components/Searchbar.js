import { useOutletContext, Link } from "react-router-dom";
import { useState } from "react";

const Searchbar = () => {
  const {productObj: [ourProducts, setOurProducts]} = useOutletContext();
  // const searchResults = [...ourProducts].reverse();
  // console.log(reverseProducts)
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState("");

  function searchPosts(event) {
    event.preventDefault();
    const newArr = ourProducts.filter((product) => {
      return product.title.toUpperCase().includes(search.toUpperCase());
    })
    if (newArr.length > 0) {
      setSearchResults(newArr);
      setNoResults("")
    } else {
      setNoResults("No results found.")
    }
    
    console.log(newArr);
  }

  function searchText(event) {
    setSearch(event.target.value)
  }

  return (
    <div>
      <form className="searchbar" 
        onSubmit={searchPosts}
      >
        <div className="search">
          <input type="text" className="search" placeholder="Search products" value={search} onChange={searchText}></input>
        </div>
        <button className="searchbar-button" type="submit">Search</button>
      </form>

      {/* search results */}
      {searchResults && searchResults.length ? searchResults.map((product, idx) => {
        // console.log(product.title);
        return <div className="product" key = {idx}>
          <Link to={`/products/${product._id}`}><span className="name-detail"><b>{product.title}</b></span></Link>
          <p><span className="price-detail">{product.price}</span></p>
          </div>
        }) : <p>{noResults}</p>
      }
      <br />
    </div>
  )
}

export default Searchbar;