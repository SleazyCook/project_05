import { useOutletContext, useParams } from "react-router-dom";
import EditPost from "./EditPostForm";
import DeletePost from "./DeletePost";
import { useState, useEffect } from 'react';

const Details = () => {
  const {productObj: [ourProducts, setOurProducts]} = useOutletContext();
  const [toggleEdit, setToggleEdit] = useState(false);
  const {id} = useParams();
  const reverseProducts = [...ourProducts].reverse();
  const [product, setProduct] = useState({});

  useEffect (() => {
    const filteredProducts = ourProducts.filter((singleProduct) => {
      return id === singleProduct._id;
    }) 
    console.log(filteredProducts)
    setProduct(filteredProducts[0]);
  }, [])
  
  function changeToggleEdit () {
    toggleEdit ? setToggleEdit(false) : setToggleEdit(true);
  }
  if (product._id) {
    
  
    return (
      <div className="product">
        <p><span className="name-detail"><b>{product.title}</b></span></p>
        <p><span className="price-detail">{product.price}</span></p>
        <p>Seller: <span className="seller-detail"></span>{product.author.username}</p>
        <p>Description: <span className="description-detail">{product.description}</span></p>
        <button type="submit" className="details-bttn">Contact Seller</button>
        <br /><br />
        <button onClick={changeToggleEdit} className="details-bttn">Edit</button>
        {/*pass down product to EditPost */}
        { toggleEdit ? < EditPost product = {product} /> : null}
        {/* <button>Delete</button> */}
        { toggleEdit ? <DeletePost product = {product} /> : null}
      </div>
    )
  } else {
    return (
      <div>
        <p>Post inactive</p>
      </div>
    )
  }
}

export default Details;