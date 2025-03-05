import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import CommentList from "./CommentList";

const UserComments = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      {isLoggedIn ? (
        <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion (20)
        </h2>
      </div>
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              className="resize-none px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
            Post comment
          </button>
        </form>
              </>
      ) : (
        <Comment />
      )}
      {
isLoggedIn ?
          <CommentList /> :null
      }
    </section>
  );
};

export default UserComments;
