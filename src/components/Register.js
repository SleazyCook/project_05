import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    // create some state, might need multiple to hold username/pw/etc
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    async function formSubmitHandler (event) {
        event.preventDefault();
        try {
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user: {
                            username: username,
                            password: password
                        }
                    })
                }
            )
            const data = await response.json();

            if (data.success){
                localStorage.setItem("token", data.data.token)
                navigate('/products');
            }
            // console.log("This is our translated data: ", data)
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
    //onSubmit and onChange
    return (
        <div id="register-container">
            <p className="large-welcome"> Create your account credentials below:</p>
            <form onSubmit={formSubmitHandler}>
                <label>Enter New Username Here: </label>
                <input type="text" value={username} onChange={updateUserNameState}></input>
                <br />
                
                <label>Enter New Password Here: </label>
                <input type="text" value={password} onChange={updatePasswordState}></input>
                <br />

                <button type="submit">Register</button>
            </form>
            <p>This is so exciting!</p>
        </div>
    )
}

export default Register;