// import React, {useState, useEffect} from "react";
import {useOutletContext, Link} from "react-router-dom";
// import React from "react";

const Products = () => {
    const {productObj: [ourProducts, setOurProducts]} = useOutletContext(); //<--- new
    // console.log(ourProducts);
    //destructure data from api, use curly braces above
    //this is because it is one piece of several pieces of state being passed down from App.js
    const reverseProducts = [...ourProducts].reverse();
    return (
        <div className="products-page-container">
            <br />
            <div className="create-or-search">
                {/* Create Post */}
                <Link to="/createPost" className="create-post-bttn-container">
                    <button className="create-post-bttn">
                        Create Post
                    </button>
                </Link>
                <br />
                <Link to="/searchbar">
                    <button className="searchbar-button">Search for Post</button>
                </Link>
            </div>
            {/* Posts, by most recent */}
        {
            reverseProducts && reverseProducts.length ? reverseProducts.map((product, idx) => {
                    // console.log(product.title);
                    return <div className="product" key = {idx}>
                        <Link to={`/products/${product._id}`}><span className="name-detail"><b>{product.title}</b></span></Link>
                        <p><span className="price-detail">{product.price}</span></p>
                        </div>
                    }) : <p>No products to display at this time
                        <br></br><br></br> SEE YOU SPACE COWBOY... </p>
            } 
        </div>
    )
};

export default Products;