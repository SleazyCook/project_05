import { useOutletContext, Link } from "react-router-dom";
import React, {useEffect, useState} from "react";

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const {productObj: [ourProducts, setOurProducts]} = useOutletContext();
  const reverseMyPosts = [...myPosts].reverse();
  useEffect (()=> {
    async function viewMyPosts () {
      // preventDefault();
      try {
        const response = await fetch ('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
        })
  
        const data = await response.json();
        console.log(data.data.posts);
        setMyPosts(data.data.posts)
        
        // setMyPosts(data);
        // const otherResponse = await fetch ('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts')
        // const otherData = await otherResponse.json();
        // // console.log(otherData)
        // setOurProducts(otherData.data.posts);
        // navigate('/products')
      } catch (error) {
        console.log(error);
      }
      
    }
    viewMyPosts();
  }, [])



  return (
    <div>
      Welcome to My Posts. 
      {
        reverseMyPosts && reverseMyPosts.length ? reverseMyPosts.map((post, idx) => {
          // console.log(product.title);
          return (
            <div key = {idx}>

            {/* <Link to={`/products/${idx}`}> */}
              {/* <p>{post.title}</p> */}
              {/* <b>{reverseMyPosts[idx]}</b> */}
              {console.log(post[0].title)}
            
            
            {/* </Link> */}

            {/* <p>{post.price}</p> */}
            </div>
          ) 
        }) : <p>No products to display at this time
          <br></br><br></br> 
          SEE YOU SPACE COWBOY... </p>
        }
    </div>
  )
}

export default MyPosts;