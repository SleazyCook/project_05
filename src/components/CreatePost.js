import React from "react";
import { Navigate } from "react-router-dom";

//lacks functionality
//useNavigate to redirect to products posts after posting
const CreatePost = () => {
  const [newPost, setNewPost] = useState({});
  const navigate = useNavigate();
  async function createNewPost (event) {
    event.preventDefault();
    try {
      const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
        }
      )
      const data = await response.json();
      {/*setNewPost*/}
      if (data.success){
        navigate('products');
      }
      console.log('createPost POST successful')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="new-post-container">
      <p>Create a listing</p>
      Item:
      <input type="text" placeholder="item name"></input><br />
      Price:
      <input type="num" placeholder="$price"></input><br />
      Description:
      <input type="text" placeholder="description" height="10"></input>
    </div>
  )
}

export default CreatePost;