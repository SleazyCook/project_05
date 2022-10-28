import { useOutletContext, useParams } from "react-router-dom";
import SendMessage from "./SendMessage";
import EditPost from "./EditPostForm";
import DeletePost from "./DeletePost";
import { useState, useEffect } from "react";

const Details = () => {
  const {
    productObj: [ourProducts, setOurProducts],
  } = useOutletContext();
  const {
    profileObj: [currentProfile, setCurrentProfile],
  } = useOutletContext();
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleSendMessage, setToggleSendMessage] = useState(false);
  const { id } = useParams();
  const reverseProducts = [...ourProducts].reverse();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const filteredProducts = ourProducts.filter((singleProduct) => {
      return id === singleProduct._id;
    });
    // console.log(filteredProducts)
    setProduct(filteredProducts[0]);
  }, []);

  function changeToggleEdit() {
    toggleEdit ? setToggleEdit(false) : setToggleEdit(true);
  }

  function changeToggleSendMessage() {
    toggleSendMessage
      ? setToggleSendMessage(false)
      : setToggleSendMessage(true);
  }

  if (product._id) {
    return (
      <div className="product">
        {/* Post Details */}
        <p>
          <span className="name-detail">
            <b>{product.title}</b>
          </span>
        </p>
        <p>
          <span className="price-detail">{product.price}</span>
        </p>
        <p>
          Seller: <span className="seller-detail"></span>
          {product.author.username}
        </p>
        <p>
          Description:{" "}
          <span className="description-detail">{product.description}</span>
        </p>
        {/* Contact User or Edit This Post */}

        {/* attempt at ternary.  */}
        {console.log(product)}
        {product.author.username == currentProfile.username ? (
          <div>
            <button onClick={changeToggleEdit} className="details-bttn">
              Edit
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={changeToggleSendMessage}
              type="submit"
              className="details-bttn"
            >
              Contact Seller
            </button>
          </div>
        )}

        {/* toggle send message content */}
        {toggleSendMessage ? <SendMessage product={product} /> : null}

        {/*pass down product to EditPost */}
        {toggleEdit ? <EditPost product={product} /> : null}
        {/* <button>Delete</button> */}
        {toggleEdit ? <DeletePost product={product} /> : null}
      </div>
    );
  } else {
    return (
      <div>
        <p>Post inactive</p>
      </div>
    );
  }
};

export default Details;
