import React from "react";

const Card = ({ label, text, value, percentage, level }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-x-2">
          <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
            {label}
          </p>
          <div className="hs-tooltip">
            <div className="hs-tooltip-toggle">
              <svg
                className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700"
                role="tooltip"
                // style="position: fixed; left: 309.086px; top: 75px;"
              >
                {text}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center gap-x-2">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
            {value}
          </h3>
          <span className="flex items-center gap-x-1 text-green-600">
            {level === "up" ? (
              <svg
                className="inline-block size-4 self-center"
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
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            ) : (
                <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                <polyline points="16 17 22 17 22 11"></polyline>
              </svg>
            )}
            <span className="inline-block text-sm">{percentage}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
