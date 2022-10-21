import React from "react";
import { useOutletContext } from "react-router-dom";


//waiting 'if token' function in app.js to work
const Profile = () => {
    
    const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext()
    return (
        <div id="profile-container">
            <p className="large-welcome">
            {`Hello ${currentProfile.username}`} 
            </p>
            <p>Messages</p>
            <p>Posts</p>
            <button type="submit">Sign Out</button>
        </div>
    )
}

export default Profile;