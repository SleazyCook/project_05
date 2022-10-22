import { useOutletContext, useParams } from "react-router-dom";
import EditPost from "./EditPostForm.js";
import { useState } from 'react';

const Details = () => {
  const {productObj: [ourProducts, setOurProducts]} = useOutletContext();
  const [toggleEdit, setToggleEdit] = useState(false);
  const {id} = useParams();
  const reverseProducts = [...ourProducts].reverse();
  const product = reverseProducts[id];
  
  function changeToggleEdit () {
    toggleEdit ? setToggleEdit(false) : setToggleEdit(true);
  }

  return (
    <div className="product">
      <p><span className="name-detail"><b>{product.title}</b></span></p>
      <p><span className="price-detail">{product.price}</span></p>
      <p>Seller: <span className="seller-detail"></span>{product.author.username}</p>
      <p>Description: <span className="description-detail">{product.description}</span></p>
      <button type="submit">Contact Seller</button>
      <br />
      <button onClick={changeToggleEdit}>Edit</button>
      {/*pass down product to EditPost */}
      { toggleEdit ? < EditPost product = {product} /> : null}
    </div>
  )
}

export default Details;