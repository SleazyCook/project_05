import React, { useState } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";


const Login = () => {
  //figure out how to use the username and pw state from Register
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext();
  async function formSubmitHandler (event) {
    event.preventDefault();
    try {
      console.log(username)
      console.log(password)
      const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/login",
        {
          method: "POST", 
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password
            }
          })
        })
        // console.log('after fetch')
        const {data} = await response.json();
        console.log(data);
        if (data.token){
          localStorage.setItem("token", data.token)
          navigate('/products');
        }
              // console.log(data);
    } catch (error) {
      console.log(error);
    }
    if (localStorage.getItem('token')) {
      async function fetchUserData () {
          try {
              const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me", 
              {
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                  },
              })
              const userData = await response.json();
              setCurrentProfile(userData.data)
              // console.log(currentProfile)
              // console.log(userData)
          } catch (error) {
              console.log(error)
          }
      }
      fetchUserData();
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