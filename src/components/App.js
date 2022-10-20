import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import {Outlet } from "react-router-dom";
// import {router} from "../index.js"

const App = () => {
    const [ourProducts, setOurProducts] = useState([]);
    const [isHome, setIsHome] = useState(true);
    // useEffect(() =>{
    //     if (window.location.pathname == "/") {
    //         setIsHome(true);
    //     } else {
    //         setIsHome(false);
    //     }
    // }, [])
    useEffect(()=>{
        async function fetchProductData () {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts");
                
                const productData = await response.json(); 
                console.log('Iam the response ', productData)
                setOurProducts(productData.data.posts);
                // console.log(productData.data.posts)
            } catch (err) {
                console.log(err);
            }
        }
        fetchProductData();
    }, [])
    // const handleIsHome = (event) => {
    //     console.log(event.target)
    //     if (event.target.textContent == 'Home') {
    //     setIsHome(true) 
    // } else { setIsHome(false)}}
    return (
        <div 
        // onClick={handleIsHome}
        >
            <header>
                <h1>Drewford's List</h1>
            </header>
                <Navbar className="nav" 
                // isHome = {isHome} setIsHome = {setIsHome} 
                />
                <Outlet context={ourProducts}/>
            {/* {isHome == true ? <p>Hello</p> : ''} */}
            <footer>
                <p>Developed by <span id="author">Drewford</span></p>
            </footer>
        </div>
    )
}

export default App;