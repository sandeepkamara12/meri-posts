import React, { useEffect, useRef, useState } from "react";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/slices/postSlice";
import Loader from "../components/Loader";

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
        <div className="mt-5 space-y-3 animate-pulse">
          <div
            className={`group posts relative last:border-0 ${layout === "vertical"
                ? "col-span-1 py-8 md:py-0 border-b border-gray md:border-0"
                : "border-b border-gray py-8"
              }`}
          >
            <div
              className={`group ${layout === "vertical" ? "flex flex-col" : "sm:flex"
                } rounded-xl focus:outline-none w-full block`}
            >
              <div
                className={`shrink-0 relative rounded-xl overflow-hidden h-[250px] ${layout === "vertical" ? "w-full" : "sm:w-[200px]"
                  } md:h-[200px]`}
              >
                <div className="w-full h-full bg-gray-200 rounded-md"></div>
              </div>
              <div className="grow">
                <div
                  className={`flex flex-col h-full p-3 ${layout === "vertical" ? "sm:py-6" : "sm:px-6"
                    }`}
                >
                  <div className="grid grid-cols-3 items-center justify-between ">
                    <div className="col-start-1 col-end-2 col-span-1 h-7 bg-gray-200 rounded-md mb-3"></div>
                    <div className="col-start-3 col-end-3 col-span-1 h-7 bg-gray-200 rounded-md mb-3"></div>
                  </div>
                  <div className="w-2/3 h-5 bg-gray-200 rounded-md mb-2"></div>
                  <div className="w-full h-12 bg-gray-200 rounded-md mb-3"></div>
                  <div className="w-1/2 h-12 bg-gray-200 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
          //  <div className="end-2 flex items-center justify-center pointer-events-none z-20 py-6">
          //   <Loader />
          // </div>
        }
      {error && <p>Error: {error}</p>}
      <div ref={loaderRef} className="h-2.5"></div>
    </div>
  );
};

export default Home;
