import React from "react";


//waiting 'if token' function in app.js to work
const Profile = () => {
    const {currentProfile} = useOutletContext()
    return (
        <div id="profile-container">
            <p id="profile">
            {`Hello ${currentProfile.username}`} 
            </p>
        </div>
    )
}

export default Profile;