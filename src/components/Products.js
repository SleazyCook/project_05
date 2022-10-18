import React, {useState, useEffect} from "react";
import {useOutletConext, Link} from "react-router-dom";
// import React from "react";

const Products = () => {
    const [ourProducts, setOurProducts] = useState([]);
    useEffect(()=>{
        async function fetchProductData () {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2201-ftb-mt-web-ft/posts");
                const productData = await response.json(); //<--- old
                // const productData = useOutletContext(); //<--- new
                // console.log("this is our useOutletConectMethod at work: ", productData) //<----new
                setOurProducts(productData.data.posts);
                // console.log(productData.data.posts)
            } catch (err) {
                console.log(err);
            }
        }
        fetchProductData();
    }, [])
    return (
        <div className="products-page-container">
            <div className="products-container">
                <p id="behold">Behold!! My Stuff</p>
                {
                    ourProducts && ourProducts.length ? ourProducts.map((product, idx) => {
                        // console.log(product.title);
                        return <div className="product" key = {idx}>
                            
                            <p>Product Name: <span id="product-name"><b>{product.title}</b></span></p>
                            <p>Price: {product.price}</p>
                            <Link to={`/product${idx}`}>See More Details About {product.title}</Link> new line for details
                            {/* <p>Seller: {product.author.username}</p>
                            <p>Description: {product.description}</p> */}
                            
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