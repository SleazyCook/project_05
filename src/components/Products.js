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
            
            
            <div id="searchbar">
                <Link to="/createPost" className="create-post-link">Create Post</Link><br /><br />
                <input type="text" placeholder="Search products"></input>
                <button type="submit">Search</button>
            </div>
            {
                reverseProducts && reverseProducts.length ? reverseProducts.map((product, idx) => {
                        // console.log(product.title);
                        return <div className="product" key = {idx}>
                            <Link to={`/products/${idx}`}><span className="name-detail"><b>{product.title}</b></span></Link>
                            <p><span className="price-detail">{product.price}</span></p>
                        </div>
                    }) : <p>No products to display at this time.<br></br><br></br> SEE YOU SPACE COWBOY... </p>
            } 
            
            {/* <div className="new-post-container">
                <p>Create a listing</p>
                <input type="text" placeholder="item name"></input><br />
                <input type="num" placeholder="$price"></input><br />
                <input type="text" placeholder="description"></input>
            </div> */}
        </div>
    )
};

export default Products;