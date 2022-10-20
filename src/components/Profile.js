import React from "react";
import { useOutletContext } from "react-router-dom";


//waiting 'if token' function in app.js to work
const Profile = () => {
    const {currentProfile} = useOutletContext()
    console.log(currentProfile)
    return (
        <div id="profile-container">
            <p id="profile">
            {`Hello ${currentProfile.username}`} 
            </p>
            <p>Messages</p>
            <p>Posts</p>
            <button type="submit">Sign Out</button>
        </div>
    )
}

export default Profile;