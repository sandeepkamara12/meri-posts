import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Post from "./Post";
import UserComments from "./UserComments";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPost,
  getRelatedPosts,
  getSinglePost,
} from "../redux/slices/postSlice";
import { getUserById } from "../redux/slices/userSlice";
import SharePostSocial from "./SharePostSocial";
import DetailPostLoader from "./DetailPostLoader";
import RelatedPosts from "./RelatedPosts";
import DetailPostShareInfo from "./DetailPostShareInfo";
import PostTags from "./PostTags";
import Loader from "./Loader";
import Gallerys from "./Gallerys";
import ReactPlayer from 'react-player';

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);
  const { post, relatedPosts, loading, error } = useSelector(
    (state) => state.posts
  );
  const { users } = useSelector((state) => state.users);

  //Get Blog Details on page render
  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
    }
    return () => {
      dispatch(clearPost());
    }
  }, [dispatch, id]);

  //Get related posts of blog details
  useEffect(() => {
    dispatch(
      getRelatedPosts({
        userId: post?.userId,
        tags: post?.tags,
        currentPostId: post?.id,
      })
    );
  }, [dispatch, post?.userId, post?.tags, post?.id]);

  //Set current user from user list object
  useEffect(() => {
    setBlog(post);
    if (post?.id) {
      setUser(users[post?.userId]);
    }
  }, [post, users]);

  //Get user information for current blog details
  useEffect(() => {
    if (post?.userId) {
      dispatch(getUserById(post?.userId));
    }
  }, [dispatch, post?.userId]);

  useEffect(() => {
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch]);

  return (
    <>
      <div className="max-w-4xl w-full mx-auto">
        {
          Object.keys(post).length > 0 ?
            <>
              <div className="pt-6 lg:pt-10 pb-8 mx-auto">
                <div className="">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                      <div className="shrink-0">
                        <img
                          className="size-12 rounded-full"
                          src={user?.image}
                          alt="Avatar"
                        />
                      </div>
                      <div className="grow">
                        <div className="flex justify-between items-center gap-x-2">
                          <div>
                            <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                              <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                                <span className="font-semibold text-gray-800">
                                  {`${user?.firstName} ${user?.lastName}`}
                                </span>
                              </div>
                            </div>

                            <ul className="text-xs text-gray-500">
                              <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                                {moment(post?.date).format("MMM Do YYYY, h:mm a")}
                              </li>
                            </ul>
                          </div>

                          <div>
                            <button
                              type="button"
                              className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              <svg
                                className="size-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                              </svg>
                              Tweet
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <PostTags blog={blog} />
                  <div className="space-y-5 md:space-y-10">
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold md:text-2xl">
                        {blog?.title}
                      </h2>

                      <p className=" mt-1 text-md text-gray">
                        {blog?.body}
                      </p>
                      <p className=" mt-1 text-md text-gray">
                        {blog?.body}
                      </p>
                    </div>
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' className="w-full" width="100%" />
                    {/* <div className="grid grid-cols-2 gap-4 flex-wrap items-center "> */}
                      {/* <div className="col-span-1">
                      </div> */}
                      {/* <figure className="col-span-2">
                        <img
                          className="w-full object-cover rounded-xl"
                          src={`/post-${blog?.id}.jpeg`}
                          alt="Blog"
                        />
                      </figure> */}
                    {/* </div> */}
                    <Gallerys />
                   
                    
                    <h3 className="text-2xl font-semibold dark:text-white">Bringing the culture of sharing to everyone</h3>
                    <p className=" mt-1 text-md text-gray">
                      {blog?.body}
                    </p>
                    <ul className="list-disc list-outside space-y-5 ps-5 text-md text-gray-800 dark:text-neutral-200">
                      <li className="ps-2">Preline allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on," <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="#" target="_parent">said</a> Stewart Scott-Curran, Intercom's Director of Brand Design.</li>
                      <li className="ps-2">Preline opened a new way of sharing. It's a persistent way for everyone to see and absorb each other's work," said David Scott, Creative Director at <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="#" target="_parent">Eventbrite</a>.</li>
                    </ul>
                    {
                      blog?.categories &&
                      blog?.categories?.length > 0 &&
                      <div>
                        {
                          blog?.categories?.map((category, index) => (
                            <Link
                              key={index}
                              className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                              href="#"
                            >
                              {category}
                            </Link>
                          ))
                        }
                      </div>
                    }
                  </div>
                </div>
              </div>
              <DetailPostShareInfo blog={blog} />
              {/* <UserComments postId={blog?.id} /> */}
              <RelatedPosts relatedPosts={relatedPosts} />
            </>
            :
            <DetailPostLoader layout="" />
        }
        {
          Object.keys(post).length > 0 && loading && <Loader layout="" />
        }
      </div>
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default BlogDetails;
