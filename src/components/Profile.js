import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";


//waiting 'if token' function in app.js to work
const Profile = () => {
    const {loggedInObj: [isLoggedIn, setIsLoggedIn]} = useOutletContext();
    const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext();
    const navigate = useNavigate();
    function logMeOut() {
        setIsLoggedIn(false)
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <div id="profile-container">
            <p className="large-welcome">
            {`Hello ${currentProfile.username}`} 
            </p>
            <p>Messages</p>
            <p>Posts</p>
            <button type="submit" onClick={logMeOut}>Sign Out</button>
        </div>
    )
}

export default Profile;