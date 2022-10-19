import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({isHome, setIsHome}) => {
    // const handleIsHome = (event) => {if (event.target.textContent == 'Home') {
    //     setIsHome(true) 
    // } else { setIsHome(false)}}
    return (
        <nav>
            <Link to="/" className="nav"><span className="nav-name" 
            // onClick={handleIsHome}
            >Home</span></Link> |
            <Link to="products" className="nav"><span className="nav-name" 
            // onClick={handleIsHome}
            >Products</span></Link> |
            <Link to="about"><span className="nav-name" 
            // onClick={handleIsHome}
            >About</span></Link> |
            <Link to="register"><span className="nav-name" 
            // onClick={handleIsHome}
            >Register</span></Link> 
        </nav>
    )
};

export default Navbar;