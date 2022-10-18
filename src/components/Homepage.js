import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <header>
                <h1>Drew's E-Commerce Site</h1>
            </header>
            <Navbar class="nav" />
            <Outlet />
            {/*maybe a ternary to show the homepage image if not on products or about*/}
            <footer>
                <p>Developed by <span id="author">Drewford</span></p>
            </footer>
        </div>
    )
}

export default Homepage;