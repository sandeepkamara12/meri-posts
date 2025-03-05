import React, { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllPosts, getPostsByTags } from '../redux/slices/postSlice';
import Post from '../components/Post';
import Loader from '../components/Loader';

const RelatedPosts = () => {
    // const location = useLocation();
    // const dispatch = useDispatch();
    // const data = useMemo(() => location.state || {}, [location.state]); // Fallback to empty object if no state

    // const observer = useRef(null);
    // const loaderRef = useRef(null);

    // const {relatedPosts, loading, error,  page, hasMore} = useSelector(state=>state.posts);

    // useEffect(()=>{
    //     dispatch(getPostsByTags({ tags: data, fetchMore: false }));
    // },[dispatch, data])

    
    // useEffect(() => {
    //     if (loading || !hasMore) return;
    
    //     observer.current = new IntersectionObserver(
    //       (entries) => {
    //         if (entries[0].isIntersecting) {
    //           console.log("Fetching page:", page);
    //           dispatch(getAllPosts(page));
    //         }
    //       },
    //       { threshold: 1.0 }
    //     );
    
    //     if (loaderRef.current) observer.current.observe(loaderRef.current);
    
    //     return () => {
    //       if (observer.current) observer.current.disconnect();
    //     };
    //   }, [dispatch, loading, hasMore, page]);

  return ("Related Posts"
    // <div className=" w-full max-w-4xl mx-auto">
    // {relatedPosts?.length > 0 &&
    //   relatedPosts?.map((post) => {
    //     return (
    //       <Post
    //         key={post?.id}
    //         alignment="vertical"
    //         data={post}
    //         // favoritePosts={favoritePosts}
    //         // toggleFavorite={toggleFavorite}
    //       />
    //     );
    //   })}
    //   {
    //     loading &&
    //      <div className="end-2 flex items-center justify-center pointer-events-none z-20 py-6">
    //       <Loader />
    //     </div>
    //   }
    // {error && <p>Error: {error}</p>}
    // <div ref={loaderRef} style={{ height: "10px" }}></div> */}
//   </div>
  )
}

export default RelatedPosts
