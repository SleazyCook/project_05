import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const SendMessage = (props) => {
  const {productObj: [ourProducts, setOurProducts]} = useOutletContext();
  const [product, setProduct] = useState({});
  const [messageText, setMessageText] = useState("");
  const navigate = useNavigate();
  async function sendAMessage (event) {
    event.preventDefault();
    try {
      if (!localStorage.getItem("token")) {
        alert("You must be logged in to send a message. If you do not have an account, proceed to the registration link on the Login Page.")
        return;
      }
      const response = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${props.product._id}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
          body: JSON.stringify({
            message: {
              content: `${messageText}`
            }
          })
      })
      
      const messageData = await response.json();
      console.log("This is the message data: ", messageData);
      navigate('/products')
    } catch (error) {
      console.log(error);
    }
    
  }

  function typeMessage(event) {
    setMessageText(event.target.value);
  }

  return (
    <div>
      <form onSubmit={sendAMessage}>
        <input onChange={typeMessage} className="search" type="text" placeholder="Message"></input>
        <button type="submit" className="searchbar-button">Send</button>
      </form>
    </div>
  )

}

export default SendMessage;