import { useOutletContext } from "react-router-dom";

const Searchbar = () => {
  const {productObj: [ourProducts, setOurProducts]} = useOutletContext();
  const reverseProducts = [...ourProducts].reverse();
  // console.log(reverseProducts)
  // const [search, setSearch]
  // function searchPosts {
  //   return reversedProducts.title.includes()
  // }
  return (
    <div>
      <form className="searchbar" 
        // onSubmit={searchPosts}
      >
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