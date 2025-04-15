import React from "react";

const UserTableHead = () => {
  return (
    <thead className="bg-gray-50 dark:bg-neutral-800">
      <tr>
        <th scope="col" className="ps-6 py-3 text-start">
          <label htmlFor="hs-at-with-checkboxes-main" className="flex">
            <input
              type="checkbox"
              className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="hs-at-with-checkboxes-main"
            />
            <span className="sr-only">Checkbox</span>
          </label>
        </th>

        <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
              Name
            </span>
          </div>
        </th>

        <th scope="col" className="px-6 py-3 text-start">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
              Position
            </span>
          </div>
        </th>

        <th scope="col" className="px-6 py-3 text-start">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
              Status
            </span>
          </div>
        </th>

        <th scope="col" className="px-6 py-3 text-start">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
              Portfolio
            </span>
          </div>
        </th>

        <th scope="col" className="px-6 py-3 text-start">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
              Created
            </span>
          </div>
        </th>

        <th scope="col" className="px-6 py-3 text-end"></th>
      </tr>
    </thead>
  );
};

export default UserTableHead;
