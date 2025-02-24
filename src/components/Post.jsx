import Categories from "./Categories";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

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
      className={`border-b py-10 border-gray posts relative ${
        alignment === "vertical" ? "" : ""
      }`}
    >
      {/* <div className="col-span-1">
        <img
          src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full"
        />
      </div>
      <div className="col-span-6 px-4">
        <h3 className="relative pe-40 text-sm">
          {post?.title}
          <p className="absolute right-0 top-0 mb-2 text-xs font-medium text-gray-100">
            10:00 am - 5 July, 2024
          </p>
        </h3>
        <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
          Web Design
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-wrap items-center space-x-4 mt-6">
          <div className="flex flex-wrap items-center">
            <div className="relative inline-block">
              <img
                className="inline-block size-8 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
              <span className="absolute bottom-0 end-0 block size-2 rounded-full ring-2 ring-white bg-red-400 dark:ring-neutral-900"></span>
            </div>
            <div className="ms-3">
              <h3 className="font-semibold text-xs text-gray-800 dark:text-white">
                Mark Wanner
              </h3>
            </div>
          </div>
          <div className="text-xs flex flex-wrap items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
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
            <span>1000</span>
          </div>
          <div className="flex flex-wrap items-center space-x-4">
            <div className="text-xs flex flex-wrap items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <span>1000</span>
            </div>
            <div className="text-xs flex flex-wrap items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                />
              </svg>
              <span>1000</span>
            </div>
          </div>
        </div>
      </div> */}
       <a className="group sm:flex rounded-xl focus:outline-none w-full block" href="#">
      <div className="shrink-0 relative rounded-xl overflow-hidden h-[150px] sm:w-[200px] sm:h-[250px] w-full">
        <img className="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
      </div>
      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3">
            <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
              Announcements
            </p>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
            Announcing a free plan for small teams
          </h3>
          <p className="mt-2 text-gray-600 dark:text-neutral-400">
            At Wake, our mission has always been focused on bringing openness.
          </p>

          <div className="mt-5 sm:mt-auto">
            <div className="flex items-center">
              <div className="shrink-0">
                <img className="size-[46px] rounded-full" src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold text-gray-800 dark:text-neutral-200">
                  Hanna Wolfe
                </h4>
                <p className="text-xs text-gray-500 dark:text-neutral-500">
                  Feb 4, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
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
