import React, { useState } from "react";

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
              console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login-container">
      <p className="center">Login with existing account</p>

      Enter username here: 
      <input type="text" placeholder=
      "username"></input><br />

      Enter password here:
      <input type="text" placeholder=
      "password"></input>

      <br />
      <button type="submit">
        Submit
      </button>
  </div>
  )

}

export default Login;