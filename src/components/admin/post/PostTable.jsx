import React from "react";
import PostTablePagination from "./PostTablePagination";
import PostTableBody from "./PostTableBody";
import PostTableHead from "./PostTableHead";
import PostTableAction from "./PostTableAction";

const PostTable = () => {
  return (
    <>
      <PostTableAction />
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <PostTableHead />
        <PostTableBody />
      </table>
      <PostTablePagination />
    </>
  );
};

export default PostTable;
