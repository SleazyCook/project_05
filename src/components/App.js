import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import {Outlet } from "react-router-dom";
// import {router} from "../index.js"

const App = () => {
    const [ourProducts, setOurProducts] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //useEffect, if there is a token in local storage, then run GET route /users/me
    useEffect (()=> {
        if (localStorage.getItem('token')) {
            async function fetchUserData () {
                try {
                    const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me", 
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                    const userData = await response.json();
                    setCurrentProfile(userData.data)
                    // console.log(currentProfile)
                    // console.log(userData)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchUserData();
        }
        async function fetchProductData () {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts");
                
                const productData = await response.json(); 
                // console.log('I am the response ', productData)
                setOurProducts(productData.data.posts);
                // console.log(productData.data.posts)
            } catch (err) {
                console.log(err);
            }
        }
        fetchProductData();
    },[])
    // console.log(currentProfile);
    useEffect(()=> { 
        if (currentProfile._id){
            setIsLoggedIn(true)
        } 
    }, [currentProfile]);
    // console.log(isLoggedIn);

    return (
        <div> 
            <header>
                <h1><a href="https://drewfordslist.netlify.app">Drewford's List</a></h1>
            </header>
            <Navbar isLoggedIn={isLoggedIn} className="nav" 
            // isHome = {isHome} setIsHome = {setIsHome} 
            />
            <Outlet context={{productObj: [ourProducts, setOurProducts], profileObj: [currentProfile, setCurrentProfile], loggedInObj: [isLoggedIn, setIsLoggedIn]}}/>
            <footer>
                <p>Developed by <span id="author">Drewford</span></p>
            </footer>
        </div>
    )
}

export default App;