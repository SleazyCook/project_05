import { useOutletContext, useParams } from "react-router-dom";

const Details = () => {
  const {productObj: [ourProducts, setOurProducts]} = useOutletContext();
  const {id} = useParams();
  const product = ourProducts[id];
  //I think I should put the create message POST here
  return (
    <div className="product">
      <p><span className="name-detail"><b>{product.title}</b></span></p>
      <p><span className="price-detail">{product.price}</span></p>
      <p>Seller: <span className="seller-detail"></span>{product.author.username}</p>
      <p>Description: <span className="description-detail">{product.description}</span></p>
      <button type="submit">Contact Seller</button>
    </div>
  )
}

export default Details;