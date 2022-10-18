// import React, {useState, useEffect} from "react";
import {useOutletContext, Link} from "react-router-dom";
// import React from "react";

const Products = () => {
    const ourProducts = useOutletContext(); //<--- new
    console.log(ourProducts);
    //destructure data from api, use curly braces above

    return (
        <div className="products-page-container">
            <div className="products-container">
                <p id="behold">Behold!! My Stuff</p>
                {
                    ourProducts && ourProducts.length ? ourProducts.map((product, idx) => {
                        // console.log(product.title);
                        return <div className="product" key = {idx}>
                            
                            <p className="name-detail" >Product Name: <span id="product-name"><b>{product.title}</b></span></p>
                            <p className="price-detail">Price: {product.price}</p>
                            <Link to={`/products/${idx}`}>See More Details About {product.title}</Link> new line for details
                            
                            
                        </div>
                    }) : <p>No products to display at this time.<br></br><br></br> SEE YOU SPACE COWBOY... </p>
            } 
            <div>
                <p id="searchbar">Search Bar goes here</p>
            </div>
            </div>
            <div className="new-post-container">
                <p>New posts go here</p>
            </div>
        </div>
    )
};

export default Products;