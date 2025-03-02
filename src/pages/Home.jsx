import React, { useEffect, useState } from 'react';
import { allPosts } from "../data";
import Post from '../components/Post';

const Home = () => {
    const [favoritePosts, setFavoritePosts] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favoritePosts")) || [];
        setFavoritePosts(savedFavorites);
    }, []);

    const toggleFavorite = (postId) => {
        let updatedFavorites;
        if (favoritePosts.includes(postId)) {
            updatedFavorites = favoritePosts.filter(id => id !== postId); // Remove from favorites
        } else {
            updatedFavorites = [...favoritePosts, postId]; // Add to favorites
        }

        setFavoritePosts(updatedFavorites);
        localStorage.setItem("favoritePosts", JSON.stringify(updatedFavorites)); // Save in storage
    };

    return (

        <div className=" w-full max-w-4xl mx-auto">
            {allPosts?.length > 0 &&
                allPosts?.map((post) => {
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
}

export default Home;
