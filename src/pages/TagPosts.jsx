import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getPostsByTagName, resetTagPosts } from "../redux/slices/postSlice";
import Post from "../components/post/Post";
import PostLoader from "../components/post/PostLoader";
import NoPostFound from "../components/post/NoPostFound";
import Loader from "../components/common/Loader";
import useLoadOnScroll from "../hooks/useLoadOnScroll";

const TagPosts = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  const { tagPosts, loading, error, page, hasMore, totalPages } = useSelector(
    (state) => state.posts
  );

  // Custom Hook to load posts on scroll
  const loaderRef = useLoadOnScroll({
    hasMore,
    loading: loading.getPostsByTagName,
    param: { tag, page },
    totalPages,
    endPoint: getPostsByTagName
  });

  // Show posts by changing the tag
  useEffect(() => {
    const getTagPosts = async() => {
      await dispatch(resetTagPosts());
      const param = {tag, page:0};
      await dispatch(getPostsByTagName({param}));

    }
    if(tag) {
     getTagPosts() ;
    }
  }, [tag]);

  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        {loading.getPostsByTagName && tagPosts && tagPosts?.length === 0 ? (
          <PostLoader />
        ) : (
          <>
            <div className="capitalize cursor-pointer transition inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 mt-6">
              Posts by {tag}
            </div>
            {tagPosts && tagPosts?.length > 0 ? (
              tagPosts?.map((post) => {
                return (
                  <Post
                    key={post?.id}
                    layout=""
                    data={post}
                    // favoritePosts={favoritePosts}
                    // toggleFavorite={toggleFavorite}
                  />
                );
              })
            ) : (
              <NoPostFound />
            )}
          </>
        )}
        {tagPosts?.length > 0 && loading.getPostsByTagName && <Loader layout="" />}

        {error.getPostsByTagName && <p>Error: {error.getPostsByTagName}</p>}
        <div ref={loaderRef} className="h-2.5"></div>
      </div>
    </>
  );
};

export default TagPosts;
