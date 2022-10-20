import React, {useState} from "react";

const Register = () => {
    // create some state, might need multiple to hold username/pw/etc
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmitHandler (event) {
        event.preventDefault();
        try {
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
                {
                    method: "POST",
                    mode: "cors",
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
            console.log("This is our translated data: ", data)
            localStorage.setItem("token", data.data.token)
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
            <form onSubmit={formSubmitHandler}>
                <label>Enter New Username Here: </label>
                <input type="text" value={username} onChange={updateUserNameState}></input>
                <br />
                

                <label>Enter New Password Here: </label>
                <input type="text" value={password} onChange={updatePasswordState}></input>
                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;