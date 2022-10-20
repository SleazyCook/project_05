import React from "react";

//lacks functionality
const CreatePost = () => {
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