import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({isLoggedIn}) => {    
    {/*nav bar as an array, condition for login/out*/}
    return (
        <nav>
            <Link to="/" className="nav">
                <span className="nav-name">
                    {/* &nbsp = nonbreaking space */}
                Home</span></Link> {/* |&nbsp;*/}

            <Link to="products" className="nav">
                <span className="nav-name">
                Posts</span></Link> {/* |&nbsp;*/}

            {/*ternary to show/hide login/profile */}
            {
                isLoggedIn ? 
                (<Link to="profile" id="profile-toggle">
                <span className="nav-name">
                    Profile</span></Link>) 
                    :
                    (<Link to="login" id="login-toggle">
                    <span className="nav-name">
                    Login</span></Link>) 
            } {/* |&nbsp;*/}

            <Link to="about">
                <span className="nav-name">
                About</span></Link>


            
        </nav>
    )
};

export default Navbar;