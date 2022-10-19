import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

const Homepage = () => {
        const [ourProducts, setOurProducts] = useState([]);
    useEffect(()=>{
        async function fetchProductData () {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2201-ftb-mt-web-ft/posts");
                const productData = await response.json(); 
                setOurProducts(productData.data.posts);
                // console.log(productData.data.posts)
            } catch (err) {
                console.log(err);
            }
        }
        fetchProductData();
    }, [])
    return (
        <div>
            <header>
                <h1>Drewford's List</h1>
            </header>
            <Navbar class="nav" />
            <Outlet context={ourProducts}/>
            {/*maybe a ternary to show the homepage image if not on products or about*/}
            <footer>
                <p>Developed by <span id="author">Drewford</span></p>
            </footer>
        </div>
    )
}

export default Homepage;