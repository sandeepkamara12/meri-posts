import React, { useEffect, useState } from "react";
import { allPosts } from "../data";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { getAllPosts } from "../redux/slices/postSlice";

const Home = () => {
  const [favoritePosts, setFavoritePosts] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const {posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoritePosts")) || [];
    setFavoritePosts(savedFavorites);
  }, []);

  useEffect(()=>{
    dispatch(getAllPosts());
  },[dispatch])

  const toggleFavorite = (postId) => {
    let updatedFavorites;
    if (favoritePosts.includes(postId)) {
      updatedFavorites = favoritePosts.filter((id) => id !== postId); // Remove from favorites
    } else {
      updatedFavorites = [...favoritePosts, postId]; // Add to favorites
    }

    setFavoritePosts(updatedFavorites);
    localStorage.setItem("favoritePosts", JSON.stringify(updatedFavorites)); // Save in storage
  };

  console.log(posts, 'posts')
  return (
      <div className=" w-full max-w-4xl mx-auto">
        {posts?.length > 0 &&
          posts?.map((post) => {
            return (
              <Post
                key={post?.id}
                alignment="vertical"
                data={post}
                favoritePosts={favoritePosts}
                toggleFavorite={toggleFavorite}
              />
            );
          })}
      </div>
  );
};

export default Home;
