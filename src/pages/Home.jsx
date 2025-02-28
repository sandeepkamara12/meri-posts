import React, { useState } from 'react';
import { categories, popularPosts, recentPosts, allPosts } from "../data";
import Post from '../components/Post';

const Home = () => {
    const [posts, setPosts] = useState(allPosts);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedPosts, setSelectedPosts] = useState(allPosts);
    // const deletedPost = async (id) => {
    //   const itemNeedToDelete = document.getElementById(id);
    //   if (itemNeedToDelete) {
    //     itemNeedToDelete.classList.add("fade");
    //     setTimeout(() => {
    //       setPosts((prev) => prev.filter((post) => post?.id !== id));
    //     }, 1000);
    //   }
    // };

    const filterPostViaCategory = (category) => {
        if (category === "all") {
            setSelectedPosts(allPosts);
        } else {
            const posted = posts.filter((post) =>
                post?.categories.includes(category)
            );
            setSelectedPosts(posted);
        }
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
                        />
                    );
                })}
        </div>
    );
}

export default Home;
