import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="home" className="nav">Home</Link> |
            <Link to="products" className="nav">Products</Link> |
            <Link to="about" className="nav">About</Link> |
            <Link to="register" className="nav">Register</Link> 
        </nav>
    )
};

export default Navbar;