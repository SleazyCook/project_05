import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="home" className="nav"><span className="nav-name">Home</span></Link> |
            <Link to="products" className="nav"><span className="nav-name">Products</span></Link> |
            <Link to="about"><span className="nav-name">About</span></Link> |
            <Link to="register"><span className="nav-name">Register</span></Link> 
        </nav>
    )
};

export default Navbar;