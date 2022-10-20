import React, { useState } from "react";

const Login = () => {
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