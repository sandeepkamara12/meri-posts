import React, { useEffect, useRef, useState } from "react";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/slices/postSlice";
import Loader from "../components/Loader";
import PostLoader from "../components/PostLoader";

const Home = () => {
  const [favoritePosts, setFavoritePosts] = useState([]);
  const { posts, loading, error, page, hasMore } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  const observer = useRef(null);
  const loaderRef = useRef(null);
  let layout = "";
  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoritePosts")) || [];
    setFavoritePosts(savedFavorites);
  }, []);

  useEffect(() => {
    if (loading || !hasMore) return;

    if (observer.current) observer.current.disconnect(); // Disconnect previous observer

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Fetching page:", page);
          dispatch(getAllPosts(page));
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.current.observe(loaderRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [dispatch, loading, hasMore, page]);

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

  return (
    <div className=" w-full max-w-4xl mx-auto">
      {posts?.length > 0 &&
        posts?.map((post) => {
          return (
            <Post
              key={post?.id}
              layout=""
              data={post}
              favoritePosts={favoritePosts}
              toggleFavorite={toggleFavorite}
            />
          );
        })}
        {
          loading &&
            <PostLoader layout="" />
        }
      {error && <p>Error: {error}</p>}
      <div ref={loaderRef} className="h-2.5"></div>
    </div>
  );
};

export default Home;
