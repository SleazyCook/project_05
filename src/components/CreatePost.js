import React, {useState} from "react";
import {useOutletContext, useNavigate} from 'react-router-dom';

//lacks functionality
//useNavigate to redirect to products posts after posting
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const {productObj: [posts, setPosts]} = useOutletContext();
  const navigate = useNavigate();
  async function createNewPost (event) {
    event.preventDefault();
    try {
      if (!localStorage.getItem("token").length) {
        alert("You are not logged in.")
        return;
      }
      const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            post: {
              title,
              description,
              price
            }
          })
        });
      const data = await response.json();
      setPosts([...posts, data.data.post])
      if (data.success){
        navigate('/products');
      }
      console.log('createPost POST successful')
    } catch (error) {
      console.log(error);
    }
  }
  function updateTitle(event) {
    setTitle(event.target.value)
  }
  function updatePrice(event) {
    setPrice(event.target.value)
  }
  function updateDescription(event) {
    setDescription(event.target.value)
  }
  return (
    <div className="new-post-container">
      <form onSubmit={createNewPost}>
        <p>Create a listing</p>
        Item:
        <input type="text" placeholder="item name" value={title} onChange={updateTitle}></input><br />
        Price:
        <input type="num" placeholder="$price" value={price} onChange={updatePrice}></input><br />
        Description:
        <input type="text" placeholder="description" value={description} onChange={updateDescription} height="10"></input>
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default CreatePost;