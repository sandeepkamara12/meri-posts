import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAllPost } from '../../redux/slices/userSlice';
import Post from "../post/Post";
import PostLoader from '../post/PostLoader';
import Loader from '../common/Loader';

const UserPosts = () => {
    const {user:{id:userId, accessToken:token}} = useSelector(state=>state.auth);
    const {userAllPosts, loading, error} = useSelector(state=>state.users);
    const dispatch = useDispatch();
    const loaderRef = useRef(null);
    
    useEffect(()=>{
        userId && token && dispatch(getUserAllPost({token, userId}));
    },[userId]);

  return (
    <div className=" w-full max-w-4xl mx-auto">
      {userAllPosts?.length > 0 ?
        userAllPosts?.map((post) => {
          return (
            <Post
              key={post?.id}
              layout=""
              data={post}
            //   favoritePosts={favoritePosts}
            //   toggleFavorite={toggleFavorite}
            />
          );
        }):
        <PostLoader />
        }
        {
        userAllPosts?.length > 0 && loading?.userPost &&
          <Loader layout="" />
        }
      {error?.userPost && <p>Error: {error?.userPost}</p>}
      <div ref={loaderRef} className="h-2.5"></div>
    </div>
  )
}

export default UserPosts
