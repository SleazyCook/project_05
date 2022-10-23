import React from "react";
// import Messages from "/Messages"
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Messages from "./Messages";
import MyPosts from "./MyPosts";


//waiting 'if token' function in app.js to work
const Profile = () => {
    const [toggleMessages, setToggleMessages] = useState(false);
    const [toggleMyPosts, setToggleMyPosts] = useState(false);
    const {loggedInObj: [isLoggedIn, setIsLoggedIn]} = useOutletContext();
    const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext();
    const navigate = useNavigate();
    function logMeOut() {
        setIsLoggedIn(false)
        localStorage.removeItem('token');
        navigate('/login')
    }

    function changeToggleMessages () {
        toggleMessages ? setToggleMessages(false) : setToggleMessages(true);
    }
    function changeToggleMyPosts () {
        toggleMyPosts ? setToggleMyPosts(false) : setToggleMyPosts(true);
    }

    return (
        <div id="profile-container">
            <div id="hello-username" className="large-welcome">
                <p> {`Hello ${currentProfile.username}`} </p>
            </div>
            <div className="profile-flex-container">
                {/* Buttons for messages, posts, and sign out */}
                <div className="profile-toolbar">

                    <button onClick={changeToggleMessages} className="profile-bttn">
                        Messages</button>
                    
                    <button type="submit" onClick={changeToggleMyPosts} className="profile-bttn">
                        My Posts</button>

                    <button type="submit" onClick={logMeOut} className="profile-bttn" id="signout-bttn">
                        Sign Out</button>
                </div>
                {/* Messages and Posts appear Here */}
                <div className="profile-content">
                    { toggleMessages ? <Messages /> : null}
                    { toggleMyPosts ? <MyPosts /> : null}
                </div>
            </div>

        </div>
    )
}

export default Profile;