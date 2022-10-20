import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import {Outlet } from "react-router-dom";
// import {router} from "../index.js"

const App = () => {
    const [ourProducts, setOurProducts] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({});
    //useEffect, if there is a token in local storage, then run GET route /users/me
    // useEffect (()=> {
    //     if (token) {
    //         async function fetchUserData () {
    //             try {
    //                 const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me", 
    //                 {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'Authorization': 'Bearer TOKEN_STRING_HERE'
    //                     },
    //                 })
    //                 const userData = await response.json();
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //         }
    //     }
    // })
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
    return (
        <div> 
            <header>
                <h1>Drewford's List</h1>
            </header>
                <Navbar className="nav" 
                // isHome = {isHome} setIsHome = {setIsHome} 
                />
                <Outlet context={{ourProducts, currentProfile}}/>
            <footer>
                <p>Developed by <span id="author">Drewford</span></p>
            </footer>
        </div>
    )
}

export default App;