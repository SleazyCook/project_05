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
                    setIsLoggedIn(true);
                    console.log(userData)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchUserData();

            // let profileToggle = document.getElementById('profile-toggle');
            // profileToggle.classList.remove('hidden');
            // // console.log(profileToggle);
            
            // let loginToggle = document.getElementById('login-toggle');
            // loginToggle.classList.add('hidden');
            // // console.log(loginToggle);
        } else {
            setIsLoggedIn(false);
        }
    },[])
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
                <Navbar isLoggedIn={isLoggedIn} className="nav" 
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