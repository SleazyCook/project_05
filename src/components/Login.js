import React, { useState } from "react";
import { Link } from "react-router-dom"

const Login = () => {
  //figure out how to use the username and pw state from Register
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function formSubmitHandler (event) {
    event.preventDefault();
    try {
      const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
        {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              username: username,
              passowrd: password
            }
          })
        }) 
        const data = await response.json();
        if (data.success){
          localStorage.setItem("token", data.data.token)
          navigate('/products') };
              // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  function updateUserNameState(event) {
    setUsername(event.target.value)
    // console.log('this is the value of the event target: ', event.target.value);
  }

function updatePasswordState(event) {
    setPassword(event.target.value)
    // console.log('this is the value of the even target: ', event.target.value);
  }
  return (
    <div className="login-container">
      <p className="large-welcome"> Login with your existing account below:</p>
      <form onSubmit={formSubmitHandler}>
        <label>Enter username:</label>
        <input type="text" value={username} onChange={updateUserNameState}></input>
        <br />

        <label>Enter password: </label>
        <input type="text" value={password} onChange={updatePasswordState}></input>
        <br />

        <button type="submit">Login</button>

      </form>
      <p> Don't have an account? No problem!</p>
      <Link to="/register">Click here for registration</Link>
    </div>
  )
}

export default Login;