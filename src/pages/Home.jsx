import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Slices
import { updateUserRole } from "../redux/slices/authSlice";
import { getUserById } from "../redux/slices/userSlice";
import { getAllPosts } from "../redux/slices/postSlice";

//Components
import Post from "../components/post/Post";
import Loader from "../components/common/Loader";
import PostLoader from "../components/post/PostLoader";

//Services + Hooks
import useLoadOnScroll from "../hooks/useLoadOnScroll";

const Home = () => {
  const {
    user: { id:userId }
  } = useSelector((state) => state.auth);
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [role, setRole] = useState("");
  const { posts, loading, error, page, hasMore, totalPages } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  // Get user role by user id
  useEffect(() => {
    userId &&
      dispatch(getUserById(userId))
        .unwrap()
        .then((res) => setRole(res?.role))
        .catch((error) => console.log(error));
  }, [userId]);

  // Update user role in localstorage to differenciate admin-user panel
  useEffect(() => {
    role && dispatch(updateUserRole(role));
  }, [role]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoritePosts")) || [];
    setFavoritePosts(savedFavorites);
  }, []);

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

  const loaderRef = useLoadOnScroll({
    hasMore,
    loading: loading.getAllPosts,
    param: { page },
    totalPages,
    endPoint: getAllPosts
  });

  return (
    <div className=" w-full max-w-4xl mx-auto">
      {posts?.length > 0 ? (
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
        })
      ) : (
        <PostLoader />
      )}

      {/* Circular Loader */}
      {posts?.length > 0 && loading.getAllPosts && <Loader layout="" />}
      {error.getAllPosts && <p>Error: {error.getAllPosts}</p>}

      <div ref={loaderRef} className="h-2.5"></div>
    </div>
  );
};

export default Home;
