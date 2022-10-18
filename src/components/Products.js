import React, {useState, useEffect} from "react";
import {useOutletConext} from "react-router-dom";
// import React from "react";

const Products = () => {
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
        <div className="products-page-container">
            <div className="products-container">
                <p id="behold">Behold!! My Stuff</p>
                {
                    ourProducts && ourProducts.length ? ourProducts.map((product, idx) => {
                        // console.log(product.title);
                        return <div className="product" key = {idx}>
                            
                            <p>Product Name: <span id="product-name"><b>{product.title}</b></span></p>
                            <p>Price: {product.price}</p>
                            <p>Seller: {product.author.username}</p>
                            <p>Description: {product.description}</p>
                            
                        </div>
                    }) : <p>No products to display at this time.<br></br><br></br> see you space cowboy... </p>
            } 
            </div>
            <div className="new-post-container">
                <p>New posts go here</p>
            </div>
        </div>
    )
};

export default Products;