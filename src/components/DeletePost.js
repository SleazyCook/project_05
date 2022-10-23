import {useNavigate, useOutletContext} from 'react-router-dom';


const DeletePost = (props) => {
  console.log(props);
  const {productObj: [ourProducts, setOurProducts]} = useOutletContext();
  const navigate = useNavigate();
  async function deleteThisPost (event) {
    event.preventDefault();
    try {
      const response = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${props.product._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
      
      const deleteData = await response.json();
      console.log("This is the deleted data: ", deleteData);
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
    <div className="delete-container">
      <button className="delete-bttn" onClick={deleteThisPost}>
        Delete Post</button>
    </div>
  )

}

export default DeletePost;