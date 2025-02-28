import Categories from "./Categories";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import SharePostSocial from "./SharePostSocial";

const Post = ({ alignment, data: post, deletedPost }) => {
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
      className={`border-b py-8 border-gray posts relative last:border-0 ${alignment === "vertical" ? "" : ""
        }`}
    >
      <div
        className="group sm:flex rounded-xl focus:outline-none w-full block"
      >
        <div className="shrink-0 relative rounded-xl overflow-hidden h-[250px] sm:w-[200px] md:h-[200px] w-full">
          <Link to={`/${post?.id}`}>
            <img
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </Link>
        </div>
        <div className="grow">
          <div className="p-3 flex flex-col h-full sm:px-6">
            <div className="mb-3 flex flex-wrap items-center justify-between">
              <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                Announcements
              </p>
              <ul className="ms-auto flex flex-wrap items-center">
                <li className="relative" data-hs-tooltip="true" title="Share to social networks">
                  <SharePostSocial />
                </li>
                <li className="relative" data-hs-tooltip="true" title="Add in your favorite">
                  <button type="button" className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="shrink-0 size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
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
            <a href="#" className="font-medium text-md text-gray-800 dark:text-neutral-200">
              Announcing a free plan for small teams
            </a>
            <p className=" mt-1 text-sm text-gray-500 dark:text-neutral-500">
              At Wake, our mission has always been focused on bringing openness. At Wake, our mission has always been focused on bringing openness...
            </p>

            <div className="mt-5 sm:mt-auto">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    className="size-[40px] rounded-full"
                    src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                </div>
                <div className="ms-2.5 sm:ms-3">
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Hanna Wolfe
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Feb 4, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="mt-1">
        <a
          className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
          href="#"
        >
          Continue reading
        </a>
      </p> */}

      {/* <div className={`${alignment === "vertical" ? " small-pic w-1/5" : ""}`}>
        <div>
          <img
            className={`${
              alignment === "vertical" ? "rounded-lg" : "rounded-xl mb-4"
            }`}
            src={post?.url}
            alt=""
          />
        </div>
      </div>
      <div
        className={`${
          alignment === "vertical" ? "w-4/5 pe-4" : ""
        } flex flex-wrap justify-between flex-col`}
      >
        <Link
          to="#"
          className={`text-blue font-bold mb-8 ${
            alignment === "vertical" ? "text-sm" : "text-lg"
          }`}
        >
          {post?.title}
        </Link>
        <Categories categories={post?.categories} />
      </div> */}
    </motion.div>
  );
};

export default Post;
