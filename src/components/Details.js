import { useOutletContext, useParams } from "react-router-dom";

const Details = () => {
  const ourProducts = useOutletContext();
  const {id} = useParams();
  const product = ourProducts[id];
  console.log(product);
  return (
    <div>
      <p className="name-detail">Product Name: <span id="product-name"><b>{product.title}</b></span></p>
      <p className="price-detail">Price: {product.price}</p>
      <p className="seller-detail">Seller: {product.author.username}</p>
      <p className="description-detail">Description: {product.description}</p>
    </div>
  )
}

export default Details;