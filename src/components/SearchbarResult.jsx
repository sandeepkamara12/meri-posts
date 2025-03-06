import React from "react";
import { Link } from "react-router-dom";

const SearchbarResult = ({ searchedPosts }) => {
  return (
    <div className="absolute top-[calc(100%+5px)] z-50 w-full bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700">
      <div className="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        {searchedPosts?.map((post) => (
          <span
            key={post.id}
            className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
          >
            <div className="flex items-center w-full">
              <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                <img
                  className="shrink-0"
                  src={`post-${post?.id}.jpeg`}
                  alt="Ella Lauda"
                />
              </div>
              <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                <Link
                  to={`/${post?.id}`}
                  className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate"
                >
                  {post?.title}
                </Link>
                <span className="text-sm text-gray-500 dark:text-neutral-500">
                  Elly muskon
                </span>
              </div>
            </div>

            {/* Close icon */}
            {/* <span className="hs-combo-box-selected:block">
              <svg
                className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                xmlns="http:.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span> */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchbarResult;
