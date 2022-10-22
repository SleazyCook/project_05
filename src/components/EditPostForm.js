import {useState} from 'react';
import {useOutletContext, useNavigate} from 'react-router-dom';


const EditPost = (props) => {
  // console.log(props);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const {productObj: [posts, setPosts]} = useOutletContext();
  const {productObj: [ourProducts, setOurProducts]} = useOutletContext();

  function editTitle (event) {
    setTitle(event.target.value)
    // console.log(event.target.value);
  }

  function editPrice (event) {
    setPrice(event.target.value)
  }

  function editDescription (event) {
    setDescription(event.target.value)
  }

  async function submitEdit (event) {
    event.preventDefault();
    try {
      // console.log(title, price, description)
      // console.log(props.product._id);
      const response = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${props.product._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price
          }
        })
      })
      
      const data = await response.json();
      // console.log(data)
      const otherResponse = await fetch ('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts')
      const otherData = await otherResponse.json();
      // console.log(otherData)
      setOurProducts(otherData.data.posts);
      navigate('/products')
    } catch (error) {
      // console.log(error);
    }
    
  }

  return (
    <div>
      <form onSubmit={submitEdit}>
        <label>Edit Title</label>
        <input type="text" value={title} onChange={editTitle}></input>
        <br />

        <label>Edit Price</label>
        <input type="text" value={price} onChange={editPrice}></input>
        <br />

        <label>Edit Description</label>
        <input type="text" value={description} onChange={editDescription}></input>

        <button type="submit">Fix</button>
        
      </form>
    </div>
    
  )
}

export default EditPost;