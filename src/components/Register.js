import React, {useState} from "react";
import ReactDOM from "react-dom";

const Register = () => {
    // create some state, might need multiple to hold username/pw/etc
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmitHandler (event) {
        event.preventDefault();
        try {
            const response = await fetch('https://strangers-things.heroku.app.com/api/2209-ftb-mt-web-ft/users/register',
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
        } catch (error) {
            console.log(error);
        }
    }
    function updateUserNameState(event) {
        console.log('this is the value of the event target: ', event.target.value);
    }

    function updatePasswordState(event) {
        console.log('this is the value of the even target: ', event.target.value);
    }
    //onSubmit and onChange
    return (
        <div>
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