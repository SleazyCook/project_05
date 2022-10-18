import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="home" class="nav">Home</Link>
            <Link to="products" class="nav">Products</Link>
            <Link to="about" class="nav">About</Link>
            <Link to="register" class="nav">Register</Link>
        </nav>
    )
};

export default Navbar;