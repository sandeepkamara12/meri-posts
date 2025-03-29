import React, { useEffect, useRef, useState } from 'react';
import SharePostSocial from './SharePostSocial';

const DetailPostShareInfo = ({ blog }) => {
    const [isOpenShareDropdown, setIsOpenShareDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpenShareDropdown((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenShareDropdown(false);
            }
        };

        if (isOpenShareDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpenShareDropdown]);
    
    return (
        <div className="sticky bottom-6 inset-x-0 text-center">
            <div className="inline-block bg-white sm:shadow-md rounded-xs sm:rounded-full py-3 px-4 w-full sm:w-auto">
                <div className="grid grid-cols-3 sm:grid-cols-auto sm:flex items-center flex-col sm:flex-row gap-x-1.5 gap-y-1.5">
                    <div className="hs-tooltip inline-block w-full sm:w-auto">
                        <button
                            type="button"
                            className="w-full py-2 sm:py-0 px-3 sm:px-0 focus:outline-none focus:bg-gray-50 font-medium rounded-lg border sm:border-0 border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                        >
                            <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 shrink-0"
                                viewBox="0 0 512 512"
                            >
                                <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z" />
                            </svg>
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
                            <svg
                                fill="currentColor"
                                className="size-4 shrink-0"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z" />
                            </svg>
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0 size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                ></path>
                            </svg>
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
                    <div
                        className="hs-dropdown relative inline-flex"
                        ref={dropdownRef}
                    >
                        <button
                            onClick={() => toggleDropdown()}
                            id="hs-blog-article-share-dropdown"
                            type="button"
                            className={`w-full py-2 sm:py-0 px-3 sm:px-0 focus:outline-none focus:bg-gray-50 font-medium rounded-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800`}
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0 size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                ></path>
                            </svg>
                            <span
                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                                role="tooltip"
                            >
                                Share
                            </span>
                            <span>share</span>
                        </button>
                        <SharePostSocial classes="" isOpenShareDropdown={isOpenShareDropdown} post={blog} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPostShareInfo;
