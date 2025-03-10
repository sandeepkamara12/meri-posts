import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Post from "./Post";
import UserComments from "./UserComments";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { getPostByUserId, getPostsByTags, getRelatedPosts, getSinglePost } from "../redux/slices/postSlice";
import { getUserById } from "../redux/slices/userSlice";
import SharePostSocial from "./SharePostSocial";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);
  
  const { post, relatedPosts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);

  //Get Blog Details on page render
  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
    }
  }, [dispatch, id]);
  
  //Get related posts of blog details
  useEffect(()=>{
    dispatch(getRelatedPosts({userId:post?.userId, tags:post?.tags, currentPostId:post?.id}));
  },[dispatch, post?.userId, post?.tags, post?.id]);
  
  //Set current user from user list object
  useEffect(() => {
    setBlog(post);
    if (post?.id) {
      setUser(users[post?.userId]);
    }
  }, [post, users]);

  //Get user information for current blog details
  useEffect(()=>{
    if(post?.userId) {
      dispatch(getUserById(post?.userId));
    }
  },[dispatch, post?.userId]);

  // useEffect(() => {
  //   dispatch(getPostsByTags({tags:blog?.tags,userId:post?.userId }));
  // }, [dispatch, blog?.tags, post?.userId]);

  if (!blog) return <Loader />;
  return (
    <div className="max-w-4xl w-full mx-auto">
      <div className="pt-6 lg:pt-10 pb-12 mx-auto">
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
{/* <input type="number" name="user_post" value={user_id} onChange={(e)=>setUser_id(e.target.value)} /> */}
              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                        <span className="font-semibold text-gray-800">
                          {`${user?.firstName} ${user?.lastName}`}
                        </span>

                        {/* <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl" role="tooltip">
      <div className="p-4 sm:p-5">
      <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
      <div className="shrink-0">
      <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
      </div>
      
      <div className="grow">
      <p className="text-lg font-semibold text-gray-200">
      Leyla Ludic
      </p>
      </div>
      </div>
      <p className="text-sm text-gray-400">
      Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
      </p>
      </div>
      
      <div className="flex justify-between items-center px-4 py-3 sm:px-5">
      <ul className="text-xs space-x-3">
      <li className="inline-block">
      <span className="font-semibold text-gray-200">56</span>
      <span className="text-gray-400">articles</span>
      </li>
      <li className="inline-block">
      <span className="font-semibold text-gray-200">1k+</span>
      <span className="text-gray-400">followers</span>
      </li>
      </ul>
      
      <div>
      <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
      </svg>
      Follow
      </button>
      </div>
      </div>
      </div> */}
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

          <div className="flex flex-wrap items-center gap-1 mb-4">
          {
            blog?.tags?.map((tag) => 
              <a key={tag} className="capitalize cursor-pointer transition hover:text-white hover:bg-blue-600 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200" href="/">{tag}</a>
            )
          } 
            </div>
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              {/* text-md text-gray-800 transition group-hover:text-blue-600 hover:text-blue-600 */}
              <h2 className="text-2xl font-bold md:text-2xl">{blog?.title}</h2>

              <p className=" mt-1 text-md text-gray">{blog?.description}</p>
              <p className=" mt-1 text-md text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                commodi, est veniam possimus hic tempora recusandae cumque
                reprehenderit necessitatibus nostrum non beatae consequatur quas
                explicabo. Nam tempore est quia nemo, vero rerum eum totam rem
                beatae modi minus laborum pariatur iure alias delectus numquam
                a. Sequi optio modi alias accusantium.
              </p>
              <p className=" mt-1 text-md text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                commodi, est veniam possimus hic tempora recusandae cumque
                reprehenderit necessitatibus nostrum non beatae consequatur quas
                explicabo. Nam tempore est quia nemo, vero rerum eum totam rem
                beatae modi minus laborum pariatur iure alias delectus numquam
                a. Sequi optio modi alias accusantium.
              </p>
            </div>

            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src={`/post-${blog?.id}.jpeg`}
                alt="Blog"
              />
              {/* <figcaption className="mt-3 text-sm text-center text-gray-500">
        A woman sitting at a table.
        </figcaption> */}
            </figure>

            {/* <div className="text-center">
          <div className="grid lg:grid-cols-2 gap-3">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          <figure className="relative w-full h-60">
          <img className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=560&amp;q=80" alt="Blog" />
          </figure>
          <figure className="relative w-full h-60">
          <img className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=560&amp;q=80" alt="Blog" />
          </figure>
          </div>
          <figure className="relative w-full h-72 sm:h-96 lg:h-full">
          <img className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=560&amp;q=80" alt="Blog" />
          </figure>
          </div>
          
          <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
          Working process
          </span>
          </div> */}

            <ul className="flex flex-col justify-end text-start -space-y-px">
              <li className="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                <div className="w-full flex justify-between truncate">
                  <span className="me-3 flex-1 w-0 truncate">
                    resume_web_ui_developer.csv
                  </span>
                  <button
                    type="button"
                    className="flex items-center gap-x-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 whitespace-nowrap"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    Download
                  </button>
                </div>
              </li>
              <li className="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                <div className="w-full flex justify-between truncate">
                  <span className="me-3 flex-1 w-0 truncate">
                    coverletter_web_ui_developer.pdf
                  </span>
                  <button
                    type="button"
                    className="flex items-center gap-x-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 whitespace-nowrap"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    Download
                  </button>
                </div>
              </li>
            </ul>
            <div>
              {blog?.categories &&
                blog?.categories?.length > 0 &&
                blog?.categories?.map((category, index) => (
                  <Link
                    key={index}
                    className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                    href="#"
                  >
                    {category}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-6 inset-x-0 text-center">
        <div className="inline-block bg-white sm:shadow-md rounded-xs sm:rounded-full py-3 px-4 w-full sm:w-auto">
          <div className="grid grid-cols-3 sm:grid-cols-auto sm:flex items-center flex-col sm:flex-row gap-x-1.5 gap-y-1.5">

            <div className="hs-tooltip inline-block w-full sm:w-auto">
              <button
                type="button"
                className="w-full py-2 sm:py-0 px-3 sm:px-0 focus:outline-none focus:bg-gray-50 font-medium rounded-lg border sm:border-0 border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              >
                <svg fill="currentColor"  xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0" viewBox="0 0 512 512"><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z" /></svg>
                {blog?.reactions?.likes}
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                  role="tooltip"
                >
                  Like
                </span>
              </button>
            </div>

            <div className="hidden sm:block h-3 border-e border-gray-300 mx-3"></div>

            <div className="hs-tooltip inline-block w-full sm:w-auto">
              <button
                type="button"
                className="w-full py-2 sm:py-0 px-3 sm:px-0 focus:outline-none focus:bg-gray-50 font-medium rounded-lg border sm:border-0 border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              >
                <svg fill="currentColor" className="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z" /></svg>
                {blog?.reactions?.dislikes}
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                  role="tooltip"
                >
                  Dislike
                </span>
              </button>
            </div>

            <div className="hidden sm:block h-3 border-e border-gray-300 mx-3"></div>

            <div className="hs-tooltip inline-block w-full sm:w-auto">
              <button
                type="button"
                className="w-full py-2 sm:py-0 px-3 sm:px-0 focus:outline-none focus:bg-gray-50 font-medium rounded-lg border sm:border-0 border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>
                {blog?.views}
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                  role="tooltip"
                >
                  View
                </span>
              </button>
            </div>

            <div className="hidden sm:block h-3 border-e border-gray-300 mx-3"></div>

            <div className="hs-tooltip inline-block w-full sm:w-auto">
              <button
                type="button"
                className="w-full py-2 sm:py-0 px-3 sm:px-0 focus:outline-none focus:bg-gray-50 font-medium rounded-lg border sm:border-0 border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                </svg>
                <span>16</span>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                  role="tooltip"
                >
                  Comment
                </span>
              </button>
            </div>

            <div className="hidden sm:block h-3 border-e border-gray-300 mx-3"></div>

            <SharePostSocial classes="border border-gray-200 shadow-sm" />

          </div>
        </div>
      </div>

      <UserComments />
      {/* <Comment /> */}

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-4">
        {
          relatedPosts && relatedPosts?.length>0 &&
        <div className="col-span-1 md:col-span-3 lg:col-span-3 md:mb-4">
          <h2 className="text-xl font-bold md:text-2xl md:leading-tight dark:text-white">
            Related Posts
          </h2>
          <p className=" mt-1 text-sm text-gray-500 dark:text-neutral-500">
            See how game-changing companies are making the most of every
            engagement with Preline.
          </p>
        </div>
        }

        {relatedPosts &&
          relatedPosts
            ?.slice(0, 3)
            .map((post, index) => (
              <Post
                key={index}
                layout="vertical"
                alignment="vertical"
                data={post}
              />
            ))}
      </div>
      {/* <div className="my-12 text-center col-span-1 md:col-span-2 lg:col-span-3">
        <button
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          onClick={() => navigate("/related-posts", { state: blog?.tags })}
        >
          Read more
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default BlogDetails;
