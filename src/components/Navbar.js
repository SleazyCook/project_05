import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({isHome, setIsHome}) => {
    // const handleIsHome = (event) => {if (event.target.textContent == 'Home') {
    //     setIsHome(true) 
    // } else { setIsHome(false)}}
    return (
        <nav>
            <Link to="/" className="nav">
                <span className="nav-name">
                    {/* &nbsp = nonbreaking space */}
                Home</span></Link> |&nbsp;

            <Link to="products" className="nav">
                <span className="nav-name">
                Products</span></Link> |&nbsp;

                {/* <Link to="createPost" className="nav">
                <span className="nav-name">
                CreatePost</span></Link> |&nbsp; */}

            <Link to="about">
                <span className="nav-name">
                    About</span></Link> |&nbsp;

            {/* <Link to="register">
                <span className="nav-name">
                    Register</span></Link> |&nbsp; */}

            <Link to="login">
                <span className="nav-name">
                    Login</span></Link> |&nbsp;

            <Link to="profile">
                <span className="nav-name">
                    Profile</span></Link>

            {/*nav bar as an array, condition for login/out*/}
        </nav>
    )
};

export default Navbar;