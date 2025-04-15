import React from "react";
import UserTablePagination from "./UserTablePagination";
import UserTableBody from "./UserTableBody";
import UserTableHead from "./UserTableHead";
import UserTableAction from "./UserTableAction";

const UserTable = () => {
  return (
    <>
      <UserTableAction />
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <UserTableHead />
        <UserTableBody />
      </table>
      <UserTablePagination />
    </>
  );
};

export default UserTable;
