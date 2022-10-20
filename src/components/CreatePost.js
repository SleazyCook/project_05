import React from "react";

const CreatePost = () => {
    return (
    <div className="new-post-container">
      <p>Create a listing</p>
      <input type="text" placeholder="item name"></input><br />
      <input type="num" placeholder="$price"></input><br />
      <input type="text" placeholder="description"></input>
    </div>
  )
}

export default CreatePost;