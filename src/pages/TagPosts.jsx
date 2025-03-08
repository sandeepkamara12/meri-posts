import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {  getPostsByTagName, resetTagPosts } from '../redux/slices/postSlice';
import Post from '../components/Post';

const TagPosts = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  const {posts, loading, error, page, hasMore, totalPages } = useSelector(state => state.posts.tagPosts);
  const observer = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (loading || !hasMore) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (page <= (totalPages - 1)) { 
            dispatch(getPostsByTagName({tag,page}));
          }
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.current.observe(loaderRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [dispatch, loading, hasMore, tag]);

  useEffect(() => {
    dispatch(resetTagPosts()); 
    dispatch(getPostsByTagName({tag, page:0}));
  },[tag, dispatch])


  return (
    <>
      <div className='w-full max-w-4xl mx-auto'>
      <div className="capitalize cursor-pointer transition hover:text-white hover:bg-blue-600 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200 mt-6">Posts by {tag }</div>
    {
      posts && posts?.length > 0 && posts?.map(post => {
        return (
          <Post
            key={post?.id}
            layout=""
            data={post}
            // favoritePosts={favoritePosts}
            // toggleFavorite={toggleFavorite}
            />
          )
        })
      }
      {error && <p>Error: {error}</p>}
      <div ref={loaderRef} className="h-2.5"></div>
      </div>
    </>
  )
}

export default TagPosts;
