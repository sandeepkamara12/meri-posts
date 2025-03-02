import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import SharePostSocial from "./SharePostSocial";
import moment from "moment";

const Post = ({ layout="", alignment, data: post, favoritePosts=[], toggleFavorite }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <motion.div
      id={post?.id}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      }}
      viewport={{ once: true, amount: 0 }}
      className={`group posts relative last:border-0 ${layout === "vertical" ? "col-span-1 py-8 md:py-0 border-b border-gray md:border-0" : "border-b border-gray py-8"
        }`}
    >
      <div
        className={`group ${layout==='vertical'?'flex flex-col':'sm:flex'} rounded-xl focus:outline-none w-full block`}
      >
        <div className={`shrink-0 relative rounded-xl overflow-hidden h-[250px] ${layout === 'vertical' ? 'w-full':'sm:w-[200px]'} md:h-[200px]`}>
          <Link to={`/${post?.id}`}>
            <img
              className="size-full absolute top-0 start-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 hover:scale-110"
              src={post?.image}
              alt="Blog Image"
            />
          </Link>
        </div>
        <div className="grow">
          <div className={`flex flex-col h-full p-3 ${layout === 'vertical' ? 'sm:py-6' : 'sm:px-6'}`}>
            <div className={`${layout === 'vertical' ? '' : 'items-center' } mb-3 flex flex-wrap justify-between`}>
              <div className="flex flex-wrap items-center gap-1">
                {post?.categories && post?.categories?.length > 0 && post?.categories?.map((category, index) =>
                  <Link to="/" key={index}  className="capitalize cursor-pointer transition hover:text-white hover:bg-blue-600 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                    {category}
                  </Link>
                )}
              </div>
              <ul className={`${layout === 'vertical' ? '' : 'ms-auto'} flex flex-wrap items-center space-x-1`}>
                <li className="relative" data-hs-tooltip="true" title="Share to social networks">
                  <SharePostSocial />
                </li>
                <li className="relative" data-hs-tooltip="true" title="Add in your favorite">
                  <div className="flex">
                    <input type="checkbox" checked={favoritePosts.includes(post.id)}
                      onChange={handleToggle} className="hidden shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-default-checkbox" />
                    <label htmlFor="hs-default-checkbox" className="text-sm text-gray-500">
                      <button
                        type="button"
                        onClick={() => toggleFavorite(post.id)}
                        className={`size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent ${favoritePosts.includes(post.id) ? "bg-red-000" : "text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill={favoritePosts.includes(post.id) ? "#dc2626" : "none"}
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke={favoritePosts.includes(post.id) ? "#dc2626" : "currentColor"}
                          className="shrink-0 size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </button>
                    </label>
                  </div>
                </li>

                <li className="relative" data-hs-tooltip="true" title="Forward to followers">
                  <button type="button" className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="shrink-0 size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                    </svg>
                  </button>
                </li>
                <li className="flex flex-wrap items-center">
                  <button type="button" className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="shrink-0 size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                  <span className="text-sm">1000</span>
                </li>
              </ul>
            </div>
            <Link to={`/${post?.id}`} className="font-medium text-md text-gray-800 transition group-hover:text-blue-600 hover:text-blue-600">
              {post?.title}
            </Link>
            <p className=" mt-1 text-sm text-gray-500 dark:text-neutral-500">
              {post?.description}
            </p>

            <div className={`${layout === 'vertical' ? '' : 'sm:mt-auto'} mt-5`}>
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    className="size-[40px] rounded-full"
                    src={post?.author?.image}
                    alt="Avatar"
                  />
                </div>
                <div className="ms-2.5 sm:ms-3">
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    {post?.author?.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    {moment(post?.date).format('MMM Do YYYY, h:mm a')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
